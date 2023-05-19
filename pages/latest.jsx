import React, {Fragment} from 'react';
import classname from 'classnames';

// Components
import HorizontalWidget from 'Components/HorizontalWidget';
import SidebarNewsWidget from 'Components/SidebarNewsWidget';
import Pagination from 'Components/Pagination';

// Actions
import {updateBreadcrumbStructure, updateDocument} from '../store';

// Services
import * as PostCategoryService from 'Services/Post/Category';

// Assets
import styles from 'Modules/Pages/Tag/styles.module.scss';

// Utils
import Constant from 'Config/constant';
import {handleError} from 'Libs/utils';

const PATH = 'application/pages/search.jsx';

class Latest extends React.Component {
    static async getInitialProps({reduxStore}) {
        try {
            let states = reduxStore.getState();
            let posts = [];
            let topFeaturePosts = [];

            let getPosts = PostCategoryService.getList({
                type: 'latest',
                page: 1,
                limit: 20
            });

            if (getPosts) {
                await getPosts.then((response) => {
                    if (response && response.data && response.data.data && response.data.data.posts) {
                        posts = response.data.data.posts;

                        if (posts.length) {
                            const url = Constant.SITE_URL + 'tin-moi.html';
                            const mobileUrl = Constant.MOBILE_SITE_URL + 'tin-moi.html';
                            let og = {};
                            let images = [];
                            let title = 'Mới nhất';

                            // Title
                            if (states.document && states.document.defaultTitle) {
                                title = title + ' - ' + states.document.defaultTitle;
                            }

                            posts.map((post) => {
                                if (post.background) {
                                    images.push(post.background);
                                } else if (post.images && post.images.normal) {
                                    images.push(post.images.normal);
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

                            og = {
                                description: states.document.defaultDescription,
                                images: images,
                                url: url
                            };

                            // Update document metadata
                            reduxStore.dispatch(updateDocument({
                                canonical: url,
                                alternate: mobileUrl,
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
                });
            }

            // Top hot posts
            let getTopFeaturePosts = PostCategoryService.getList({
                type: 'latest',
                page: 1
            });

            if (getTopFeaturePosts) {
                await getTopFeaturePosts.then((response) => {
                    if (response && response.data && response.data.data && response.data.data.posts) {
                        topFeaturePosts = response.data.data.posts;
                    }
                });
            }

            return {posts, topFeaturePosts};
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

    render() {
        const {posts = [], topFeaturePosts = []} = this.props;
        const titleName = 'Mới nhất';

        return (
            <Fragment>
                <div ref={this.myRef} className={classname('container', styles['container'])}>
                    <div className={classname('container-body clearfix w1040', styles['container-body'])}>
                        <div className={classname('clearfix w1040')}>
                            <div className={classname('container-left fl w720', styles['container-left'])}>
                                <div className="clearfix">
                                    <h2 className={classname('mt-20', styles['post-title'])}>{titleName}</h2>
                                </div>
                                <div className="top-news">
                                    {
                                        posts && posts.length ? (
                                            <HorizontalWidget
                                                skeletonLoading={!posts.length}
                                                number={100}
                                                background={'normal'}
                                                posts={posts}
                                            />
                                        ) : null
                                    }
                                </div>
                                {/*<div className={classname('pb-20')}>
                                    <Pagination />
                                </div>*/}
                            </div>
                            <div className={classname('container-right col-sticky fr mt-20 w300')}>
                                <SidebarNewsWidget
                                    className="col-sticky"
                                    skeletonLoading={!topFeaturePosts.length}
                                    title="Mẹo vặt hay"
                                    background={'medium'}
                                    posts={topFeaturePosts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Latest;
