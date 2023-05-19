import React, {Fragment} from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';
import classname from 'classnames';

// Components
import FeaturedWidget from 'Components/FeaturedWidget';
import HorizontalWidget from 'Components/HorizontalWidget';
import SidebarNewsWidget from 'Components/SidebarNewsWidget';

// Services
import * as PostCategoryService from 'Services/Post/Category';

// Actions
import {setHeaderMenu, updateDocument, updateBreadcrumbStructure} from '../store';

// Utils
import Constant from 'Config/constant';
import {handleError} from 'Libs/utils';

const PATH = 'application/pages/category.jsx';

class Category extends React.Component {
    static async getInitialProps({reduxStore, query}) {
        try {
            let states = reduxStore.getState();
            let og = {};
            let slug = '';
            let parentSlug = '';
            let childrenSlug = '';
            let isChildrenSlug = false;

            let menus = [];
            let topFeaturePosts = [];
            let posts = [];
            let featurePostsByWeek = [];

            // Validate slug
            if (query && query.slug) {
                // giai-tri
                slug = query.slug;
                parentSlug = slug;

                if (query.child) {
                    //giai-tri/tv-show => tv-show
                    slug = query.child;

                    isChildrenSlug = true;
                    childrenSlug = slug;
                } else if (slug.indexOf('/') >= 0) {
                    // When slug is: doi-song/giai-tri
                    let arrSlug = slug.split('/');

                    if (arrSlug.length) {
                        slug = arrSlug[arrSlug.length - 1];

                        parentSlug = arrSlug[0];
                        childrenSlug = slug;
                        isChildrenSlug = true;
                    }
                }
            }

            if (slug) {
                const path = isChildrenSlug ? parentSlug + '/' + slug : slug;
                const url = Constant.SITE_URL + path + '.htm';
                const mobileUrl = Constant.MOBILE_SITE_URL + path + '.htm';

                // Update document metadata
                reduxStore.dispatch(updateDocument({
                    canonical: url,
                    alternate: mobileUrl
                }));

                try {
                    let getPosts = PostCategoryService.getList({
                        slug: slug,
                        page: 1
                    });

                    if (getPosts) {
                        const response = await getPosts;

                        if (response && response.data && response.data.data && response.data.data.posts) {
                            posts = response.data.data.posts;

                            if (posts.length) {
                                let images = [];

                                posts.map((post, key) => {
                                    if (post.background) {
                                        images.push(post.background);
                                    } else if (post.images && post.images.normal) {
                                        images.push(post.images.normal);
                                    }

                                    // Add to feature posts
                                    if (key < 3) {
                                        topFeaturePosts.push(post);
                                    }
                                });

                                // Filter 3 posts for feature
                                posts = posts.filter((value, index) => index >= 3);

                                // Validate images
                                if (images.length) {
                                    images = images.map((image) => {
                                        if (image && image.indexOf('https:') < 0) {
                                            return 'https:' + image;
                                        }

                                        return image;
                                    });
                                }

                                og = {
                                    description: states.document.defaultDescription,
                                    images: images,
                                    url: url
                                };
                            }
                        }
                    }

                    // Sidebar top posts
                    let getTopPosts = PostCategoryService.getList({
                        slug: slug,
                        type: 'top',
                        time: 'weekly'
                    });

                    if (getTopPosts) {
                        const response = await getTopPosts;

                        if (response && response.data && response.data.data && response.data.data.posts) {
                            featurePostsByWeek = response.data.data.posts;
                        }
                    }

                    // Active category
                    if (states && states.headerMenu) {
                        let title = '';
                        let findMenu = null;

                        let headerMenu = states.headerMenu.map((menu) => {
                            if (menu.slug === parentSlug) {
                                menu.active = true;

                                findMenu = menu;
                            } else {
                                menu.active = false;
                            }

                            return menu;
                        });

                        if (findMenu && findMenu.name) {
                            reduxStore.dispatch(setHeaderMenu(headerMenu));

                            menus.push({
                                id: findMenu.id,
                                name: findMenu.name,
                                slug: findMenu.slug,
                                active: !isChildrenSlug
                            });

                            // Use menu name to document title
                            if (!isChildrenSlug) {
                                title = findMenu.name;
                            }

                            if (findMenu.child && findMenu.child.length) {
                                findMenu.child.map((menu) => {
                                    if (menu.name) {
                                        menus.push({
                                            id: menu.id,
                                            name: menu.name,
                                            slug: findMenu.slug + '/' + menu.slug,
                                            active: isChildrenSlug && menu.slug === childrenSlug
                                        });

                                        // Use menu children name to document title
                                        if (isChildrenSlug && menu.slug === childrenSlug) {
                                            title = menu.name;
                                        }
                                    }
                                });
                            }
                        }

                        // Set document title
                        if (title) {
                            // Combined document default title with menu title
                            if (states.document && states.document.defaultTitle) {
                                title = title + ' - ' + states.document.defaultTitle;
                            }

                            reduxStore.dispatch(updateDocument({
                                title: title,
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
                                        '@id': url,
                                        'name': title
                                    }
                                }
                            ];

                            reduxStore.dispatch(updateBreadcrumbStructure({
                                itemListElement: breadcrumbItems
                            }));
                        }
                    }
                } catch (error) {
                    //Error
                    handleError(new Error('Category slug not found'), {
                        actionName: 'getInitialProps',
                        path: PATH,
                        args: {}
                    });
                }
            }

            return {slug, menus, topFeaturePosts, posts, featurePostsByWeek};
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
        this.state = {};

        this.myRef = React.createRef();
    }

    renderSubMenu = () => {
        let menus = this.props.menus;

        if (menus && menus.length) {
            return (
                <ul>
                    {
                        menus.map((menu) => {
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
    }

    render() {
        const {topFeaturePosts = [], posts = [], featurePostsByWeek = []} = this.props;

        try {
            return (
                <Fragment>
                    <div ref={this.myRef} className="container">
                        <div className="sub-navbar">
                            <div className={classname('clearfix w1040')}>
                                {
                                    this.renderSubMenu()
                                }
                            </div>
                        </div>
                        <div className={classname('container-body clearfix w1040')}>
                            <div className={classname('clearfix w1040')}>
                                <div className={classname('container-left fl w720')}>
                                    <FeaturedWidget
                                        className="mt-20"
                                        skeletonLoading={!topFeaturePosts.length}
                                        posts={topFeaturePosts}
                                    />

                                    <HorizontalWidget
                                        skeletonLoading={!posts.length}
                                        number={100}
                                        background={'medium'}
                                        posts={posts}
                                    />
                                </div>
                                <div className={classname('container-right col-sticky fr mt-20 w300')}>
                                    <SidebarNewsWidget
                                        skeletonLoading={!featurePostsByWeek.length}
                                        title="Mẹo hay tuần qua"
                                        className="col-sticky sidebar-widget-news"
                                        posts={featurePostsByWeek}
                                    />
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

export default withRouter(Category);
