import React, {Fragment} from 'react';
import classname from 'classnames';
import Link from 'next/link';

// Components
import HorizontalWidget from 'Components/HorizontalWidget';
import SidebarNewsWidget from 'Components/SidebarNewsWidget';
import PageNotFound from 'Components/PageNotFound';

// Actions
import {updateBreadcrumbStructure, updateDocument} from '../store';

// Services
import * as PostTagService from 'Services/Post/Tags';
import * as PostCategoryService from 'Services/Post/Category';

// Assets
import styles from 'Modules/Pages/Tag/styles.module.scss';

// Utils
import Constant from 'Config/constant';
import {handleError} from 'Libs/utils';

const PATH = 'application/pages/tag.jsx';
const POST_PER_PAGE = 20;

class Tags extends React.Component {
    static async getInitialProps({reduxStore, req, query}) {
        try {
            let states = reduxStore.getState();
            let slug = '';
            let tag = {};
            let similarTags = [];
            let posts = [];
            let latestPosts = [];

            if (query && query.slug) {
                slug = query.slug;
                let postService = PostTagService.getList({
                    slug: query.slug,
                    limit: POST_PER_PAGE,
                    page: 1
                });

                if (postService) {
                    await postService.then((response) => {
                        if (response && response.data && response.data.data && response.data.data.posts) {
                            if (response.data.data.tags && response.data.data.tags.length) {
                                tag = response.data.data.tags[0];
                                posts = response.data.data.posts;

                                let title = tag.name + ' - ' + states.document.defaultTitle;
                                let images = [];

                                if (posts.length) {
                                    let arrTagsSlug = [];

                                    posts.map((post) => {
                                        if (post.background) {
                                            images.push(post.background);
                                        } else if (post.images && post.images.normal) {
                                            images.push(post.images.normal);
                                        }

                                        // similarTags
                                        if (post.tags && post.tags.length) {
                                            post.tags.map((tagItem) => {
                                                if (tagItem.slug && arrTagsSlug.indexOf(tagItem.slug) < 0) {
                                                    arrTagsSlug.push(tagItem.slug);

                                                    similarTags.push({
                                                        ...tagItem
                                                    });
                                                }
                                            });
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
                                }

                                if (tag.name) {
                                    const url = Constant.SITE_URL + slug + '.html';
                                    const mobileUrl = Constant.MOBILE_SITE_URL + slug + '.html';
                                    let og = {
                                        description: title,
                                        images: images,
                                        url: url
                                    };

                                    // Update document metadata
                                    reduxStore.dispatch(updateDocument({
                                        canonical: url,
                                        alternate: mobileUrl,
                                        title: tag.name + ' - ' + states.document.defaultTitle,
                                        og: {
                                            ...og,
                                            title: title
                                        }
                                    }));

                                    // Update Breadcrumb structured data
                                    const breadcrumbItems = [
                                        {
                                            '@type': 'ListItem',
                                            'position': 1,
                                            'item': {
                                                '@id': Constant.SITE_URL,
                                                'name': 'Tin tức'
                                            }
                                        },
                                        {
                                            '@type': 'ListItem',
                                            'position': 2,
                                            'item': {
                                                '@id': Constant.SITE_URL + slug + '.html',
                                                'name': tag.name
                                            }
                                        }
                                    ];

                                    reduxStore.dispatch(updateBreadcrumbStructure({
                                        itemListElement: breadcrumbItems
                                    }));
                                }
                            }
                        }
                    });
                }

                // latest posts
                let getLatestPosts = PostCategoryService.getList({
                    type: 'latest',
                    page: 1
                });

                if (getLatestPosts) {
                    await getLatestPosts.then((response) => {
                        if (response && response.data && response.data.data && response.data.data.posts) {
                            latestPosts = response.data.data.posts;
                        }
                    });
                }

            }

            return {slug, tag, similarTags, posts, latestPosts};
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'getInitialProps',
                path: PATH,
                args: {}
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };

        this.myRef = React.createRef();
    }

    render() {
        const tagName = this.props.tag && this.props.tag.name ? this.props.tag.name : '';

        try {
            return (
                <Fragment>
                    <div ref={this.myRef} className={classname('container', styles['container'])}>
                        <div className={classname(styles['sub-navbar'])} style={{height: 50}}>
                            <div className={classname('clearfix w1040', styles['w1040'])}>
                                {
                                    this.props.similarTags.length ? (
                                        <ul className={classname(styles['sub-navbar-keywords'])}>
                                            <li><i className="icon icon-arrow-graph-up-right" /></li>
                                            {
                                                this.props.similarTags.map((tag, key) => {
                                                    if (key < 5 && tag.slug && tag.name) {
                                                        return (
                                                            <li key={tag.id}>
                                                                <Link href={'/tag?slug=' + tag.slug} as={'/' + tag.slug + '.html' }>
                                                                    <a title={'Từ khóa: ' + tag.name}>{tag.name}</a>
                                                                </Link>
                                                            </li>
                                                        );
                                                    }
                                                })
                                            }
                                        </ul>
                                    ) : null
                                }
                            </div>
                        </div>
                        <div className={classname('container-body clearfix w1040', styles['container-body'])}>
                            <div className={classname('clearfix w1040')}>
                                <div className={classname('container-left fl w720', styles['container-left'])}>
                                    {
                                        tagName ? (
                                            <>
                                                <div className="clearfix">
                                                    <h2 className={classname('mt-20', styles['post-title'])}>{tagName || 'Từ khóa không tồn tại'}</h2>
                                                </div>
                                                <div className="top-news">
                                                    <HorizontalWidget
                                                        skeletonLoading={!this.props.posts.length}
                                                        number={100}
                                                        isShowCategory={true}
                                                        background={'normal'}
                                                        posts={this.props.posts}
                                                    />
                                                </div>
                                            </>
                                        ) : <PageNotFound />
                                    }
                                </div>
                                <div className={classname('container-right col-sticky fr mt-20 w300')}>
                                    <SidebarNewsWidget
                                        className="col-sticky"
                                        skeletonLoading={!this.props.latestPosts.length}
                                        title="Tin tức mới nhất"
                                        background={'medium'}
                                        posts={this.props.latestPosts} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
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

export default Tags;
