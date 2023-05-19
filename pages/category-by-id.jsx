import React, {Fragment} from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';
import classname from 'classnames';

// Components
import FeaturedWidget from 'Components/FeaturedWidget';
import HorizontalWidget from 'Components/HorizontalWidget';
import SidebarNewsWidget from 'Components/SidebarNewsWidget';
import Pagination from 'Components/Pagination';

// Services
import * as PostCategoryService from 'Services/Post/Category';

// Actions
import {setHeaderMenu, updateDocument, updateBreadcrumbStructure} from '../store';

// Utils
import Constant from 'Config/constant';
import {handleError} from 'Libs/utils';

const PATH = 'application/pages/category.jsx';
const POST_PER_PAGE = 20;

class Category extends React.Component {
    static async getInitialProps({reduxStore, query}) {
        try {
            let states = reduxStore.getState();
            let og = {};
            let slug = '';
            let category = {};
            let cid = '';
            let total = 1;
            let currentPage = Math.abs(+query.page) || 1;

            let menus = [];
            let topFeaturePosts = [];
            let posts = [];
            let featurePostsByWeek = [];
            let images = [];

            // Validate slug
            if (query && query.slug && query.cid) {
                slug = query.slug;
                cid = query.cid;

                const path = slug;
                const url = Constant.SITE_URL + path + '-c' + cid + '.html';
                const mobileUrl = Constant.MOBILE_SITE_URL + path + '-c' + cid + '.html';

                // Update document metadata
                reduxStore.dispatch(updateDocument({
                    canonical: url,
                    alternate: mobileUrl
                }));

                try {
                    let getPosts = PostCategoryService.getList({
                        slug: slug,
                        limit: POST_PER_PAGE,
                        page: currentPage
                    });

                    if (getPosts) {
                        const response = await getPosts;

                        if (response && response.data && response.data.data && response.data.data.posts) {
                            posts = response.data.data.posts;
                            total = +response.data.data.total || 1;

                            if (posts.length) {
                                posts.map((post, key) => {
                                    // Add to feature posts
                                    if (key < 3) {
                                        topFeaturePosts.push(post);
                                    }

                                    let image = '';

                                    // Validate images for header metadata
                                    if (post.background) {
                                        image = post.background;
                                    } else if (post.images && post.images.normal) {
                                        image = post.images.normal;
                                    }

                                    if (image && image.indexOf('https:') < 0) {
                                        return 'https:' + image;
                                    }

                                    images.push(image);
                                });

                                // Filter 3 posts for feature
                                posts = posts.filter((value, index) => index >= 3);
                            }
                        }
                    }

                    // Find active category
                    if (states && states.headerMenu) {
                        const headerMenu = states.headerMenu;

                        headerMenu.map((menu) => {
                            // Update header menu active
                            menu.active = menu.id === +cid;

                            if (menu.id === +cid) {
                                // Set menus info
                                menus = menu;

                                // Active category
                                category = menu;
                            } else if (menu.child) {
                                menu.child.map((childMenu) => {
                                    if (childMenu.id === +cid) {
                                        // Set menus info
                                        menus = menu;

                                        // Active category
                                        category = childMenu;
                                    }
                                });
                            }
                        });

                        reduxStore.dispatch(setHeaderMenu(headerMenu));

                        // Update document metadata
                        if (category && category.id) {
                            const title = category.name + ' - ' + states.document.defaultTitle;

                            reduxStore.dispatch(updateDocument({
                                title: title,
                                og: {
                                    ...og,
                                    title: title,
                                    description: states.document.defaultDescription,
                                    images: images,
                                    url: url
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
                } catch (error) {
                    //Error
                    handleError(new Error('Category slug not found'), {
                        actionName: 'getInitialProps',
                        path: PATH,
                        args: {}
                    });
                }
            }

            return {cid, category, menus, topFeaturePosts, posts, currentPage, total, featurePostsByWeek};
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

        };

        this.myRef = React.createRef();
    }

    renderSubMenu = () => {
        try {
            const {menus = {}, cid} = this.props;

            let arrMenus = [
                {
                    id: menus.id,
                    name: menus.name,
                    slug: menus.slug,
                    active: menus.id === +cid
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
                                if (menu.id) {
                                    return (
                                        <li key={menu.id} className={classname({'active': menu.id === +cid})}>
                                            <Link href={'/category-by-id?slug=' + menu.slug + '&cid=' + menu.id} as={'/' + menu.slug + '-c' + menu.id + '.html'}>
                                                <a title={menu.name}>{menu.name}</a>
                                            </Link>
                                        </li>
                                    );
                                }
                            })
                        }
                    </ul>
                );
            }
        } catch (error) {
            handleError(error, {
                actionName: 'renderSubMenu',
                path: PATH,
                args: {}
            });
        }
    }

    render() {
        const {cid, category, topFeaturePosts = [], posts = [], featurePostsByWeek = [], currentPage = 1} = this.props;
        const href = category && category.slug ? Constant.SITE_URL + category.slug + '-c' + cid + '.html' : '';

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

                                    {
                                        posts.length ? (
                                            <HorizontalWidget
                                                skeletonLoading={false}
                                                background={'medium'}
                                                number={100}
                                                posts={posts}
                                            />
                                        ) : null
                                    }

                                    <div className={classname('pb-20')}>
                                        <Pagination
                                            href={href}
                                            currentPage={currentPage}
                                            pageSize={POST_PER_PAGE}
                                            total={this.props.total}
                                        />
                                    </div>
                                </div>
                                <div className={classname('container-right col-sticky fr mt-20 w300')}>
                                    <SidebarNewsWidget
                                        skeletonLoading={!featurePostsByWeek.length}
                                        title="Mẹo hay tuần qua"
                                        className="col-sticky sidebar-widget-news"
                                        background={'medium'}
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
