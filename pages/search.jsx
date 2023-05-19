import React, {Fragment} from 'react';
import Router from 'next/router';
import classname from 'classnames';
import Link from 'next/link';

// Components
import SidebarNewsWidget from 'Components/SidebarNewsWidget';
import HorizontalWidget from 'Components/HorizontalWidget';

// Actions
import {updateBreadcrumbStructure, updateDocument} from '../store';

// Services
import * as PostSearchService from 'Services/Post/Search';
import * as PostCategoryService from 'Services/Post/Category';

// Utils
import Constant from 'Config/constant';
import {handleError, mapSearchAndParam} from 'Libs/utils';

// Assets
import styles from 'Modules/Pages/Search/styles.module.scss';

const PATH = 'application/pages/search.jsx';

class Search extends React.Component {
    static async getInitialProps({reduxStore, req, query}) {
        try {
            let states = reduxStore.getState();
            let search = '', posts = [], similarTags = [], latestPosts = [];

            if (query && query.q) {
                search = query.q;

                reduxStore.dispatch(updateDocument({
                    title: 'Tìm kiếm từ khóa: ' + search
                }));

                let postService = PostSearchService.getList({
                    q: search,
                    limit: 20,
                    page: 1
                });

                if (postService) {
                    await postService.then((response) => {
                        if (response && response.data && response.data.data && response.data.data.posts) {
                            const url = Constant.SITE_URL + 'search?q=' + mapSearchAndParam(search);
                            const mobileUrl = Constant.MOBILE_SITE_URL + 'search?q=' + mapSearchAndParam(search);

                            posts = response.data.data.posts;

                            if (posts.length) {
                                let images = [];
                                let arrTagsSlug = [];

                                posts.map((post) => {
                                    if (post.background) {
                                        images.push(post.background);
                                    } else if (post.images && post.images.normal) {
                                        images.push(post.images.normal);
                                    }

                                    // similarTags
                                    if (post.tags && post.tags.length) {
                                        post.tags.map((tag) => {
                                            if (tag.slug && arrTagsSlug.indexOf(tag.slug) < 0) {
                                                arrTagsSlug.push(tag.slug);

                                                similarTags.push({
                                                    ...tag
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

                                let og = {
                                    description: states.document.defaultDescription,
                                    images: images,
                                    url: url
                                };

                                // Update document metadata
                                reduxStore.dispatch(updateDocument({
                                    canonical: url,
                                    alternate: mobileUrl,
                                    og: {
                                        ...og,
                                        title: 'Tìm kiếm từ khóa: ' + search
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
                                            'name': 'Tìm kiếm từ khóa: ' + search
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

                // latest posts
                let getLatestPosts = PostCategoryService.getList({
                    type: 'latest',
                    page: 1,
                    limit: 7
                });

                if (getLatestPosts) {
                    await getLatestPosts.then((response) => {
                        if (response && response.data && response.data.data && response.data.data.posts) {
                            latestPosts = response.data.data.posts;
                        }
                    });
                }
            }

            return {search, similarTags, posts, latestPosts};
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
            searchValue: mapSearchAndParam(props.search, Constant.QUERY_TO_SEARCH),
            page: 1
        };
    }

    onKeyDownSearch = (event) => {
        try {
            if (event && event.target && event.target.value) {
                const value = event.target.value;

                if (event.keyCode === Constant.KEYCODE.ENTER) {
                    Router.push('/search?q=' + mapSearchAndParam(value));
                }
            }
        } catch (error) {
            handleError(error, {
                actionName: 'onKeyDownSearch',
                path: PATH,
                args: {}
            });
        }
    };

    onChangeSearch = (event) => {
        this.setState({
            searchValue: event.target.value
        });
    };

    onClickSearchIcon = () => {
        if (this.state.searchValue) {
            Router.push('/search?q=' + mapSearchAndParam(this.state.searchValue));
        }
    };

    render() {
        const {posts = []} = this.props;
        const {searchValue} = this.state;

        try {
            return (
                <Fragment>
                    <div className={classname('container', styles['container'])}>
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
                                    <div className={classname('clearfix')}>
                                        <div className={classname(styles['search-area'])}>
                                            <input
                                                type="text"
                                                placeholder="Nhập nội dung tìm kiếm"
                                                value={searchValue}
                                                onChange={this.onChangeSearch}
                                                onKeyDown={this.onKeyDownSearch}
                                            />
                                            <svg onClick={this.onClickSearchIcon} width="15" height="15" viewBox="0 0 12 12">
                                                <path d="M12.000,10.909 C12.000,11.999 10.909,11.999 10.909,11.999 L7.788,8.879 C6.979,9.467 5.986,9.818 4.909,9.818 C2.198,9.818 -0.000,7.620 -0.000,4.909 C-0.000,2.197 2.198,-0.000 4.909,-0.000 C7.620,-0.000 9.818,2.197 9.818,4.909 C9.818,5.986 9.467,6.978 8.879,7.788 L12.000,10.909 ZM4.909,1.091 C2.800,1.091 1.091,2.800 1.091,4.909 C1.091,7.017 2.800,8.727 4.909,8.727 C7.017,8.727 8.727,7.017 8.727,4.909 C8.727,2.800 7.017,1.091 4.909,1.091 Z" fill="#333" />
                                            </svg>
                                        </div>
                                        <h1 className={classname(styles['search-title'])}>
                                            {posts.length ? ('TÌM THẤY ' + posts.length + ' KẾT QUẢ') : 'KHÔNG TÌM THẤY KẾT QUẢ PHÙ HỢP'}
                                        </h1>
                                    </div>
                                    <div className="top-news">
                                        {
                                            posts.length ? <HorizontalWidget
                                                skeletonLoading={!posts.length}
                                                number={100}
                                                background={'normal'}
                                                posts={posts}
                                            /> : null
                                        }
                                    </div>
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

export default Search;
