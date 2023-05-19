import React from 'react';
import classname from 'classnames';
import Link from 'next/link';

// Components
import HorizontalWidget from 'Components/HorizontalWidget';
import SidebarHighlightWidget from 'Components/SidebarHighlightWidget';
import ListWidget from 'Components/ListWidget';
import VerticalWidget from 'Components/VerticalWidget';

// Services
import * as PostHomeService from 'Services/Post/Home';
import * as PostCategoryService from 'Services/Post/Category';

// Actions
import {updateDocument, updateBreadcrumbStructure, setHeaderMenu} from '../store';

// Utils
import {handleError} from 'Libs/utils';
import Constant from 'Config/constant';

// Assets
import styles from 'Modules/Pages/Home/styles.module.scss';

const PATH = 'application/pages/index.jsx';
const BOX_VERTICAL_NEWS_STYLE = 1;
const BOX_VERTICAL_AND_LIST_NEWS_STYLE = 2;
const BOX_HORIZONTAL_AND_THUMB_NEWS_STYLE = 3;

class Home extends React.Component {
    static async getInitialProps({reduxStore, req}) {
        try {
            const states = reduxStore.getState();
            const url = Constant.SITE_URL;
            const mobileUrl = Constant.MOBILE_SITE_URL;

            // Set document title default in home page
            if (states && states.document && states.document.defaultTitle) {
                reduxStore.dispatch(updateDocument({
                    title: states.document.defaultTitle,
                    canonical: url,
                    alternate: mobileUrl
                }));
            }

            // Update Breadcrumb structured data
            reduxStore.dispatch(updateBreadcrumbStructure({
                itemListElement: []
            }));

            // Change Menu active when redirect to home page
            if (states && states.headerMenu) {
                let headerMenu = states.headerMenu.map((menu) => {
                    if (menu.active) {
                        menu.active = false;
                    }

                    if (menu.child) {
                        menu.child = menu.child.map((childMenu) => {
                            if (childMenu.active) {
                                childMenu.active = false;
                            }

                            return childMenu;
                        });
                    }

                    return menu;
                });

                reduxStore.dispatch(setHeaderMenu(headerMenu));
            }

            // API get posts for Home page
            const getHomePosts = PostHomeService.getList();

            let latest = [];
            let top = [];
            let category = [];
            let featureNews = [];
            let featureNewsRight = [];
            let arrTopPid = [];
            let horizontalNews = [];

            if (getHomePosts) {
                await getHomePosts.then((response) => {
                    if (response && response.data && response.data.data) {
                        latest = response.data.data.latest || [];
                        top = response.data.data.top || [];
                        category = response.data.data.category || [];

                        if (top.length) {
                            let images = [];

                            top.map((post, key) => {
                                if (post.pid) {
                                    arrTopPid.push(post.pid);
                                }

                                if (post.background) {
                                    images = [post.background];
                                } else if (post.images && post.images.normal) {
                                    images = [post.images.normal];
                                }

                                // Top 3 posts to featured post and then horizontal news
                                if (key < 3) {
                                    featureNews.push(post);
                                } else {
                                    featureNewsRight.push(post);
                                }
                            });

                            // Validate images
                            if (images.length) {
                                images = images.map((image) => {
                                    if (image && image.indexOf('https:') < 0) {
                                        return 'https:' + image;
                                    }

                                    return image;
                                });
                            }

                            reduxStore.dispatch(updateDocument({
                                og: {
                                    title: states.document.defaultTitle,
                                    description: states.document.defaultDescription,
                                    images: images,
                                    url: Constant.SITE_URL
                                }
                            }));
                        }
                    }
                });
            }

            const getHorizontalNews = PostCategoryService.getList({
                type: 'weekly',
                limit: 30,
                page: 1
            });

            if (getHorizontalNews) {
                await getHorizontalNews.then((response) => {
                    if (response && response.data && response.data.data) {
                        horizontalNews = response.data.data.posts || [];

                        if (horizontalNews && horizontalNews.length) {
                            horizontalNews = horizontalNews.filter((post) => {
                                if (arrTopPid.indexOf(post.pid) < 0) {
                                    return true;
                                }
                            });

                        }
                    }
                });
            }

            return {latest, top, category, featureNews, featureNewsRight, horizontalNews};
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

        };
    }

    getCategoryBoxStyle = (slug) => {
        if (['doi-song', 'suc-khoe'].indexOf(slug) >= 0) {
            return BOX_VERTICAL_NEWS_STYLE;
        } else if (['thoi-trang'].indexOf(slug) >= 0) {
            return BOX_VERTICAL_AND_LIST_NEWS_STYLE;
        } else {
            return BOX_HORIZONTAL_AND_THUMB_NEWS_STYLE;
        }
    }

    renderCategoryBox = (category, boxStyle = BOX_VERTICAL_NEWS_STYLE) => {
        try {
            if (category && category.name && category.slug && category.posts && boxStyle) {
                boxStyle = this.getCategoryBoxStyle(category.slug);

                switch (boxStyle) {
                    case BOX_VERTICAL_NEWS_STYLE:
                        return (
                            <div key={category.id} className={classname(styles['sidebar-category'])} style={{background: '#fafafa'}}>
                                <h2 className={classname(styles['heading'])}>
                                    <Link href={'/category-by-id?slug=' + category.slug + '&cid=' + category.id} as={'/' + category.slug + '-c' + category.id + '.html'}>
                                        <a title={category.name}>{category.name}</a>
                                    </Link>
                                </h2>
                                <HorizontalWidget
                                    skeletonLoading={false}
                                    number={2}
                                    isShowCategory={false}
                                    isRowReverse={true}
                                    background={'normal'}
                                    posts={category.posts}
                                />
                            </div>
                        );
                    case BOX_VERTICAL_AND_LIST_NEWS_STYLE:
                        return (
                            <div key={category.id} className={classname(styles['sidebar-category'])} style={{background: '#fafafa'}}>
                                <h2 className={classname(styles['heading'])}>
                                    <Link href={'/category-by-id?slug=' + category.slug + '&cid=' + category.id} as={'/' + category.slug + '-c' + category.id + '.html'}>
                                        <a title={category.name}>{category.name}</a>
                                    </Link>
                                </h2>
                                <HorizontalWidget
                                    skeletonLoading={false}
                                    isShowCategory={false}
                                    isRowReverse={true}
                                    background={'normal'}
                                    number={1}
                                    posts={category.posts}
                                />
                                <ListWidget
                                    number={4}
                                    posts={category.posts.filter((post, key) => key > 0)}
                                />
                            </div>
                        );
                    case BOX_HORIZONTAL_AND_THUMB_NEWS_STYLE:
                        return (
                            <div key={category.id} className={classname(styles['sidebar-category'])} style={{background: '#fafafa'}}>
                                <h2 className={classname(styles['heading'])}>
                                    <Link href={'/category-by-id?slug=' + category.slug + '&cid=' + category.id} as={'/' + category.slug + '-c' + category.id + '.html'}>
                                        <a title={category.name}>{category.name}</a>
                                    </Link>
                                </h2>
                                <div className={classname(styles['content'], 'clearfix')}>
                                    <div className={classname(styles['left'], 'fl')}>
                                        <VerticalWidget
                                            isShowTag={false}
                                            background={'normal'}
                                            post={category.posts[0]}
                                        />
                                    </div>
                                    <div className={classname(styles['right'], 'fr')}>
                                        <HorizontalWidget
                                            skeletonLoading={false}
                                            isShowCategory={false}
                                            isRowReverse={true}
                                            isShowDescription={false}
                                            isSmallLayout={true}
                                            background={'medium'}
                                            number={3}
                                            posts={category.posts.filter((post, key) => key > 0)}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                }
            }
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'renderCategoryBox',
                path: PATH,
                args: {
                    category,
                    boxStyle
                }
            });
        }
    }

    render() {
        try {
            return  (
                <div className={classname(styles['container'], 'container')}>
                    <div className={classname('container-body clearfix w1160 pb-20')} style={{borderBottom: '1px solid #eee'}}>
                        <div className={classname('w540 fl pt-20')} >
                            {
                                this.props.featureNews && this.props.featureNews.length ? (
                                    <VerticalWidget
                                        isShowTag={false}
                                        isShowDescription={false}
                                        background={'large'}
                                        post={this.props.featureNews[0]}
                                    />
                                ) : null
                            }

                            <ul className="pt-20" style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between'}}>
                                {
                                    this.props.featureNews && this.props.featureNews.length ? this.props.featureNews.map((post, key) => {
                                        if (key > 0 && key < 3) {
                                            return (
                                                <li key={key.toString()} style={{width: 260}}>
                                                    <VerticalWidget
                                                        isShowTag={false}
                                                        isShowDescription={false}
                                                        background={'normal'}
                                                        post={post}
                                                    />
                                                </li>
                                            );
                                        }
                                    }) : null
                                }
                            </ul>
                        </div>
                        <div className={classname('w590 fr pt-20')} >
                            <div className={classname('fl')} style={{width: 265}}>
                                {
                                    this.props.featureNewsRight && this.props.featureNewsRight.length ? (
                                        <VerticalWidget
                                            isShowTag={false}
                                            isShowDescription={false}
                                            background={'normal'}
                                            post={this.props.featureNewsRight[0]}
                                        />
                                    ) : null
                                }

                                {
                                    this.props.featureNewsRight && this.props.featureNewsRight.length ? (
                                        <HorizontalWidget
                                            skeletonLoading={false}
                                            number={4}
                                            isSmallLayout={true}
                                            isShowCategory={false}
                                            isShowDescription={false}
                                            background={'medium'}
                                            posts={this.props.featureNewsRight.filter((post, key) => key > 0)}
                                        />
                                    ) : null
                                }
                            </div>
                            <div className={classname('fl pl-20')} style={{width: 325}}>
                                <SidebarHighlightWidget
                                    title="Mới nhất"
                                    style={{width: '100%'}}
                                    background={'normal'}
                                    posts={this.props.latest}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classname('container-body clearfix w1160 pt-20')}>
                        <div className="fl w540">
                            {
                                this.props.horizontalNews && this.props.horizontalNews.length ? <HorizontalWidget
                                    skeletonLoading={false}
                                    number={16}
                                    background={'medium'}
                                    posts={this.props.horizontalNews}
                                /> : null
                            }
                        </div>
                        <div className="fr w590">
                            {
                                this.props.category && this.props.category.length ? this.props.category.map((category) => {
                                    return this.renderCategoryBox(category, BOX_VERTICAL_NEWS_STYLE);
                                }) : null
                            }
                        </div>
                    </div>
                </div>
            );
        } catch (error) {
            handleError(error, {
                actionName: 'render',
                path: PATH,
                args: {}
            });
        }
    }
}

export default Home;
