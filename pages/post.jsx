import React, {Fragment} from 'react';
import Link from 'next/link';
import classname from 'classnames';
import moment from 'moment';
import Carousel, {Modal, ModalGateway} from 'react-images';

// Components
import HorizontalWidget from 'Components/HorizontalWidget';
import SidebarNewsWidget from 'Components/SidebarNewsWidget';
import SimilarNewsWidget from 'Components/SimilarNewsWidget';
import SidebarHighlightWidget from 'Components/SidebarHighlightWidget';

// Services
import * as PostService from 'Services/Post/Info';
import * as PostCategoryService from 'Services/Post/Category';

// Actions
import {updateDocument, updateBreadcrumbStructure, setHeaderMenu} from '../store';

// Assets
import PageNotFound from 'Static/images/error-404.jpg';
import styles from 'Modules/Pages/Post/styles.module.scss';

// Utils
import Constant from 'Config/constant';
import {handleError, getObjectPropSafely, quoteDoubleToSingle} from 'Libs/utils';
import TagComponent from '../components/TagComponent';

const PATH = 'application/pages/post.jsx';

class Post extends React.Component {
    static async getInitialProps({reduxStore, query, req}) {
        try {
            let states = reduxStore.getState();
            let pid = '';
            let slug = '';
            let menus = [];
            let post = {};
            let arrPostTagId = [];
            let similarPosts = [];

            // Check post detail
            if (query && query.slug && query.pid) {
                pid = query.pid;
                slug = query.slug;

                let postService = PostService.get({
                    id: query.pid,
                    slug: query.slug
                });

                if (postService) {
                    await postService.then((response) => {
                        if (response && response.data && response.data.data && response.data.data.post) {
                            post = response.data.data.post;

                            // Set document title
                            if (post.title) {
                                let description = post.description ? quoteDoubleToSingle(post.description).trim() : '';
                                let images = [];

                                // Find tags of post
                                if (post.tags && post.tags.length) {
                                    post.tags.map((tag) => {
                                        if (tag.id) {
                                            arrPostTagId.push(tag.id);
                                        }
                                    });
                                }

                                if (post.background) {
                                    images = [post.background];
                                } else if (post.images && post.images.normal) {
                                    images = [post.images.normal];
                                }

                                // Validate images
                                if (images.length) {
                                    images = images.map((image) => {
                                        if (image && image.indexOf('https:') < 0) {
                                            return 'https:' + image;
                                        }

                                        return image;
                                    });
                                }

                                let updatedTime = post.time && moment(post.time, 'YYYY-MM-DD HH:mm:ss').format();

                                // Update document metadata
                                reduxStore.dispatch(updateDocument({
                                    canonical: post.href,
                                    alternate: post.href ? post.href.replace('meovathay.vn', 'm.meovathay.vn') : '',
                                    title: post.title,
                                    og: {
                                        title: post.title,
                                        description: description,
                                        images: images,
                                        updatedTime: updatedTime,
                                        url: post.href,
                                        tags: post.tags || []
                                    }
                                }));

                                // Update Breadcrumb structured data
                                if (getObjectPropSafely(() => post.category.name) && getObjectPropSafely(() => post.category.shorten)) {
                                    const {name, shorten = '', id: cid} = post.category;

                                    const breadcrumbItem = {
                                        '@type': 'ListItem',
                                        'position': 1,
                                        'item': {
                                            '@id': Constant.SITE_URL + shorten + '-c'  + cid + '.html',
                                            'name': name
                                        }
                                    };

                                    reduxStore.dispatch(updateBreadcrumbStructure({
                                        itemListElement: [breadcrumbItem]
                                    }));
                                }
                            }

                            // Menus
                            if (states && states.headerMenu) {
                                const headerMenu = states.headerMenu;
                                const {id: cid} = post.category;

                                headerMenu.map((menu) => {
                                    // Update header menu active
                                    menu.active = menu.id === +cid;

                                    if (menu.id === +cid) {
                                        // Set menus info
                                        menus = {
                                            ...menu,
                                            active: true
                                        };
                                    } else if (menu.child) {
                                        menu.child.map((childMenu) => {
                                            const active = childMenu.id === +cid;

                                            childMenu.active = active;

                                            if (active) {
                                                // Set menus info
                                                menus = {
                                                    ...menu
                                                };
                                            }
                                        });
                                    }
                                });

                                reduxStore.dispatch(setHeaderMenu(headerMenu));
                            }
                        }
                    });
                }

                // similar posts
                let filters = [
                    {
                        'pid': {
                            'does_not_matches_any': pid
                        },
                        'tags.id': {
                            'matches_any': arrPostTagId.join(',')
                        }
                    }
                ];

                let getSimilarPosts = PostCategoryService.getList({
                    filters: JSON.stringify(filters),
                    type: 'latest',
                    limit: 15,
                    page: 1
                });

                if (getSimilarPosts) {
                    await getSimilarPosts.then((response) => {
                        if (response && response.data && response.data.data && response.data.data.posts) {
                            similarPosts = response.data.data.posts;
                        }
                    });
                }
            }

            return {menus, pid, slug, post, similarPosts};
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'getInitialProps',
                path: PATH,
                args: {
                    req
                }
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            pid: props.pid,
            slug: props.slug,
            isShowBackground: false, // Show background when post content not exist image element
            latestPosts: [],
            categorySimilarPosts: [],
            lightbox: {
                isOpen: false,
                photoIndex: 0
            }
        };

        this.myRef = React.createRef();
    }

    componentDidMount() {
        try {
            this.handleImages();

            // Latest posts
            this.getLatestPosts();

            // Latest category similar posts
            this.getCategorySimilarPosts();
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'componentDidMount',
                path: PATH,
                args: {}
            });
        }
    }

    componentDidUpdate() {
        try {
            if (this.props.pid !== this.state.pid && this.props.slug !== this.state.slug) {
                this.setState({
                    pid: this.props.pid,
                    slug: this.props.slug
                }, () => {
                    this.handleImages();

                    // Latest posts
                    this.getLatestPosts();

                    // Latest category similar posts
                    this.getCategorySimilarPosts();
                });
            }
        } catch (error) {
            handleError(error, {
                actionName: 'componentDidUpdate',
                path: PATH,
                args: {}
            });
        }
    }

    componentDidCatch(error, errorInfo) {
        // Error
        handleError(error, {
            actionName: 'componentDidCatch',
            path: PATH,
            args: {
                errorInfo
            }
        });
    }

    handleImages = () => {
        try {
            if (this.myRef && this.myRef.current) {
                let images = [];

                // Attachment images
                let attachmentFigure = this.myRef.current.getElementsByTagName('figure');

                if (attachmentFigure && attachmentFigure.length) {
                    for (let i = 0; i < attachmentFigure.length; i++) {
                        if (attachmentFigure[i].classList.contains('attachment-image') || attachmentFigure[i].classList.contains('attachment-album-item')) {
                            let image = attachmentFigure[i].getElementsByTagName('img');

                            if (image && image.length) {
                                let src = image[0].getAttribute('data-src');

                                if (!src) {
                                    src = image[0].getAttribute('src');
                                }

                                let alt = image[0].getAttribute('alt');

                                image[0].addEventListener('click', () => {
                                    this.setState({
                                        lightbox: {
                                            ...this.state.lightbox,
                                            isOpen: true,
                                            photoIndex: i
                                        }
                                    });
                                });

                                if (src) {
                                    images.push({
                                        src: src,
                                        title: alt
                                    });
                                }
                            }
                        }
                    }
                }

                if (images.length) {
                    this.setState({
                        lightbox: {
                            ...this.state.lightbox,
                            photos: images
                        }
                    });
                }

                // Attachment album
                let attachmentAlbums = this.myRef.current.getElementsByClassName('attachment-album');

                if (attachmentAlbums && attachmentAlbums.length) {
                    for (let i = 0; i < attachmentAlbums.length; i++) {
                        let attachmentAlbumRow = attachmentAlbums[i].getElementsByClassName('attachment-album-row');

                        if (attachmentAlbumRow.length) {
                            for (let j = 0; j < attachmentAlbumRow.length; j++) {
                                this.handleAlbumDimensions(attachmentAlbumRow);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'handleImages',
                path: PATH,
                args: {}
            });
        }
    }

    handleAlbumDimensions = (albumRow) => {
        try {
            if (albumRow && albumRow.length) {
                for (let i = 0; i < albumRow.length; i++) {
                    let albumHeight = albumRow[i].getAttribute('height');
                    let images = albumRow[i].getElementsByTagName('img');
                    let intervalTime = [];
                    let intervalCount = 0;

                    if (!albumHeight && images.length) {
                        intervalTime[i] = setInterval(() => {
                            intervalCount++;
                            let minHeight = 0;

                            // Clear interval
                            if (intervalCount > 10) {
                                clearInterval(intervalTime[i]);
                            }

                            for (let j = 0; j < images.length; j++) {
                                if (images[j].complete) {
                                    clearInterval(intervalTime[i]);

                                    if (minHeight <= 0 || (minHeight > images[j].height)) {
                                        minHeight = +images[j].height;
                                    }
                                }
                            }

                            if (minHeight > 0) {
                                albumRow[i].setAttribute('height', minHeight + 'px');
                                albumRow[i].style.height = minHeight + 'px';
                            }
                        }, 500);
                    }
                }
            }
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'handleAlbumDimensions',
                path: PATH,
                args: {}
            });
        }
    }

    getLatestPosts = () => {
        try {
            const {category} = this.props.post;
            const {shorten} = category;

            if (shorten) {
                let filters = [
                    {
                        'pid': {
                            'does_not_matches_any': this.props.pid
                        }
                    }
                ];

                let getPosts = PostCategoryService.getList({
                    filters: JSON.stringify(filters),
                    type: 'latest',
                    page: 1
                });

                if (getPosts) {
                    getPosts.then((response) => {
                        if (response && response.data && response.data.data && response.data.data.posts) {
                            let posts = response.data.data.posts;

                            this.setState({
                                latestPosts: posts
                            });
                        }
                    });
                }
            }
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'getLatestPosts',
                path: PATH,
                args: {}
            });
        }
    }

    getCategorySimilarPosts = () => {
        try {
            const {category} = this.props.post;
            const {shorten} = category;

            if (shorten) {
                let filters = [
                    {
                        'pid': {
                            'does_not_matches_any': this.props.pid
                        }
                    }
                ];

                let getPosts = PostCategoryService.getList({
                    filters: JSON.stringify(filters),
                    slug: shorten,
                    type: 'latest',
                    page: 1
                });

                if (getPosts) {
                    getPosts.then((response) => {
                        if (response && response.data && response.data.data && response.data.data.posts) {
                            let posts = response.data.data.posts;

                            this.setState({
                                categorySimilarPosts: posts
                            });
                        }
                    });
                }
            }
        } catch (error) {
            handleError(error, {
                actionName: 'getCategorySimilarPosts',
                path: PATH,
                args: {}
            });
        }
    }

    onCloseLightbox = () => {
        try {
            this.setState({
                lightbox: {
                    ...this.state.lightbox,
                    isOpen: false
                }
            });

        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'onCloseLightbox',
                path: PATH,
                args: {}
            });
        }
    }

    renderSubMenu = () => {
        try {
            const {menus = {}, post} = this.props;
            let arrMenus = [
                {
                    id: menus.id,
                    name: menus.name,
                    slug: menus.slug,
                    active: post.category && post.category.id && menus.id === post.category.id
                }
            ];

            if (menus.child && menus.child.length) {
                arrMenus = arrMenus.concat(menus.child);
            }

            if (arrMenus && arrMenus.length) {
                return (
                    <ul>
                        {
                            arrMenus.map((menu) => {
                                return (
                                    <li key={menu.id} className={classname({'active': menu.active})}>
                                        <Link href={'/category-by-id?slug=' + menu.slug + '&cid=' + menu.id} as={'/' + menu.slug + '-c' + menu.id + '.html'}>
                                            <a title={menu.name}>{menu.name}</a>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                );
            }

            return null;
        } catch (error) {
            handleError(error, {
                actionName: 'renderSubMenu',
                path: PATH,
                args: {}
            });
        }
    }

    render() {
        const {similarPosts, post = {}} = this.props;
        let {isOpen, photoIndex, photos} = this.state.lightbox;

        return  (
            <Fragment>
                <TagComponent post={post} />
                <div ref={this.myRef} className={classname('container', styles['container'])}>
                    {
                        post && post.title ? (
                            <>
                                <div className="sub-navbar" style={{background: '#fff'}}>
                                    <div className={classname('clearfix w1040')}>
                                        {this.renderSubMenu()}
                                    </div>
                                </div>
                                <div className={classname(styles['container-body'], 'container-body clearfix w1040')}>
                                    <div className={classname('clearfix w1040')}>
                                        <div className={classname(styles['post-wrapper'], 'container-left fl w720')}>
                                            <h1 className={classname(styles['post-title'])}>{post.title}</h1>
                                            <div className={classname(styles['meta-source'])}>
                                                <span className={classname(styles['source'])}>THEO {post.sourceName ? post.sourceName : 'VNEXPRESS'}</span>
                                                <span className={classname(styles['time'])}><i className="fa fa-clock-o" aria-hidden="true" /> {post.time ? moment(post.time, 'YYYY-MM-DD HH:mm:ss').format('DD-MM-YYYY HH:mm:ss') : '21-09-2019 12:27:40'}</span>
                                            </div>
                                            <div className={classname(styles['socials'])} />
                                            <div className={classname(styles['post-content'], 'post-content')}>
                                                <div className={classname(styles['post-menu-navbar'])}>
                                                    <div className={classname(styles['go-to-home'])}>
                                                        <Link href="/">
                                                            <a title="Trang chủ">
                                                                <span className="icon-home" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className={classname(styles['share-facebook'])}>
                                                        <a
                                                            ref={'nofollow'}
                                                            target="_blank" rel="noopener noreferrer"
                                                            title="Chia sẻ bài viết lên Facebook"
                                                            href={'https://www.facebook.com/sharer/sharer.php?u=' + post.href} >
                                                            <span className="icon-facebook" />
                                                        </a>
                                                    </div>
                                                    <div className={classname(styles['go-back'])} >
                                                        <Link href={'/category-by-id?slug=' + post.category.shorten + '&cid=' + post.category.id} as={'/' + post.category.shorten + '-c' + post.category.id + '.html'}>
                                                            <a title={post.category ? 'Trở về ' + post.category.name : ''}>
                                                                <span className="icon-undo2" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h2 className={classname(styles['post-description'])}>{post.description}</h2>
                                                {
                                                    this.state.isShowBackground && post.background ? (
                                                        <div className={classname(styles['post-background'])}>
                                                            <img alt={post.title} src={post.background} />
                                                        </div>
                                                    ) : null
                                                }

                                                <div className={classname(styles['post-container'])} dangerouslySetInnerHTML={{__html: post.content}} />

                                                <div className="clearfix">
                                                    <div className={classname(styles['post-source'])}>
                                                        <div>Theo <span>{post.sourceName ? post.sourceName : 'VNEXPRESS'}</span></div>
                                                    </div>
                                                    <div className={classname(styles['post-share'])} />
                                                </div>
                                            </div>
                                            {
                                                post.tags && post.tags.length ? (
                                                    <div className={classname(styles['post-tags'], 'clearfix')}>
                                                        <ul>
                                                            {
                                                                post.tags.map((tag, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link href={'/tag?slug=' + tag.slug} as={'/' + tag.slug + '.html' }>
                                                                                <a title={tag.name}>#{tag.name}</a>
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                ) : null
                                            }
                                        </div>
                                        <div className={classname('container-right col-sticky fr mt-20 w300')}>
                                            {
                                                similarPosts && similarPosts.length ? (
                                                    <SidebarHighlightWidget
                                                        key={this.props.post.pid}
                                                        className="col-sticky"
                                                        title="Bài viết liên quan"
                                                        background={'normal'}
                                                        posts={similarPosts}
                                                    />
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                    <div className={classname('clearfix w1040')}>
                                        <div className={classname(styles['post-wrapper'], 'container-left fl w720')}>
                                            <div className={classname(styles['post-related'])}>
                                                {
                                                    similarPosts.length >= 4 ? (
                                                        <SimilarNewsWidget
                                                            key={this.props.post.pid}
                                                            title="Bài viết liên quan"
                                                            background={'normal'}
                                                            posts={similarPosts.filter((post, key) => key > 0)}
                                                        />
                                                    ) : null
                                                }

                                                {
                                                    this.state.categorySimilarPosts.length ? (
                                                        <>
                                                            <div className={classname(styles['post-related-title'])}>Tin mới cùng chuyên mục</div>
                                                            <HorizontalWidget
                                                                skeletonLoading={!this.state.categorySimilarPosts.length}
                                                                background={'normal'}
                                                                posts={this.state.categorySimilarPosts}
                                                            />
                                                        </>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className={classname('container-right col-sticky fr mt-20 w300')}>
                                            <SidebarNewsWidget
                                                skeletonLoading={!this.state.latestPosts.length}
                                                title="Bài viết mới nhất"
                                                background={'medium'}
                                                posts={this.state.latestPosts}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <ModalGateway>
                                    {
                                        isOpen ? (
                                            <Modal onClose={this.onCloseLightbox}>
                                                <Carousel
                                                    currentIndex={photoIndex}
                                                    views={photos.map(x => ({
                                                        ...x,
                                                        srcset: x.srcSet,
                                                        caption: x.title
                                                    }))}
                                                />
                                            </Modal>
                                        ) : null
                                    }
                                </ModalGateway>
                            </>
                        ) : (
                            <div className={classname(styles['post-not-found'], 'w1040')}>
                                <img alt="Page not found" src={PageNotFound} />
                                <p>Xin lỗi bạn, chúng tôi không tìm thấy bài viết này. <br /> Mời bạn quay về trang chủ để xem những tin tức mới nhất.</p>
                                <Link href="/">
                                    <a title="Trở về trang chủ" className={classname(styles['go-back-to-home'])}>Trở về trang chủ</a>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </Fragment>
        );
    }
}

export default Post;
