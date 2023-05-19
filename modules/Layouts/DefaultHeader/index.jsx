import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';
import Link from 'next/link';
import classname from 'classnames';
import moment from 'moment';

// Assets
import styled from './styles.module.scss';
import Logo from 'Static/images/meovathay.png';
import HomeIcon from 'Static/images/icon-home.svg';
import HotNewsIcon from 'Static/images/icon-hot-news.svg';
import LatestNewsIcon from 'Static/images/icon-lastest.svg';

// Utils
import Constant from 'Config/constant';
import {handleError, mapSearchAndParam, getObjectPropSafely} from 'Libs/utils';
import LoginComponent from './component/LoginComponent';

const PATH = 'application/modules/Layouts/DefaultHeader/index.jsx';

class DefaultHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            isSearchFocus: false
        };

        this.searchInputRef = React.createRef();
    }

    componentDidMount() {
        try {
            document.addEventListener('click', this.onClickSearch);
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'componentDidMount',
                path: PATH,
                args: {}
            });
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickSearch);
    }

    onKeyDownSearch = (event) => {
        try {
            if (event && event.target && event.target.value) {
                const value = event.target.value;

                if (event.keyCode === Constant.KEYCODE.ENTER) {
                    this.setState({
                        searchValue: ''
                    }, () => {
                        this.props.router.push('/search?q=' + mapSearchAndParam(value));

                        this.setState({
                            isSearchFocus: false
                        });
                    });
                }
            }
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'onKeyDownSearch',
                path: PATH,
                args: {}
            });
        }
    };

    onChangeSearch = (event) => {
        try {
            this.setState({
                searchValue: event.target.value
            });
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'onChangeSearch',
                path: PATH,
                args: {}
            });
        }
    };

    onClickSearch = (event) => {
        try {
            if (event.target.className.includes('icon-search') || event.target.className.includes('search-input')) {
                if (!this.state.isSearchFocus) {
                    this.setState({
                        isSearchFocus: true
                    });
                }
            } else if (this.state.isSearchFocus) {
                this.setState({
                    isSearchFocus: false
                });
            }
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'onClickSearch',
                path: PATH,
                args: {}
            });
        }
    };

    onClickSearchIcon = () => {
        try {
            if (this.state.searchValue) {
                this.props.router.push('/search?q=' + mapSearchAndParam(this.state.searchValue));

                this.setState({
                    isSearchFocus: false
                });
            }
        } catch (error) {
            // Error
            handleError(error, {
                actionName: 'onClickSearchIcon',
                path: PATH,
                args: {}
            });
        }
    };

    render() {
        moment.locale('vi');
        let today = moment().format('dddd, DD/MM/YYYY');
        const classContainer = getObjectPropSafely(() => this.props.router.route) === '/' ? 'w1160' : 'w1040';

        return (
            <Fragment>
                <div className={classname(styled['top-header'])}>
                    <div className={classname('container', classContainer)}>
                        <div className={classname(styled['logo'])}>
                            {
                                this.props.router.pathname === '/post' ? (
                                    <Link href={'/'} >
                                        <a title={this.props.defaultTitle}>
                                            <img width={70} height={44} alt={this.props.defaultTitle} src={Logo} />
                                        </a>
                                    </Link>
                                ) : (
                                    <h1>
                                        <Link href={'/'} >
                                            <a title={this.props.defaultTitle}>
                                                <img width={70} height={44} alt={this.props.defaultTitle} src={Logo} />
                                            </a>
                                        </Link>
                                    </h1>
                                )
                            }
                        </div>
                        <span className={classname(styled['time-now'])}>{today}</span>
                        <div className={classname(styled['header-right'], 'fr')}>
                            <h2>
                                <LoginComponent />
                            </h2>
                            <h2>
                                <Link href={'/latest'} as={'/tin-moi.html'}>
                                    <a title="Tin mới">
                                        <img src={LatestNewsIcon} alt="Tin mới" />
                                            MỚI NHẤT
                                    </a>
                                </Link>
                            </h2>
                            <h2>
                                <Link href={'/hot'} as={'/tin-nong.html'}>
                                    <a title="Mẹo vặt hay">
                                        <img src={HotNewsIcon} alt="Mẹo vặt hay" />
                                            MẸO VẶT HAY
                                    </a>
                                </Link>
                            </h2>
                            <div className={classname(styled['toolbar-search'], 'fr ml-20')}>
                                <div className={classname(styled['search-area'], 'fr ml-20')}>
                                    <input
                                        id="searchPost"
                                        className={classname('search-input')}
                                        placeholder="Nhập nội dung tìm kiếm"
                                        value={this.state.searchValue}
                                        onChange={this.onChangeSearch}
                                        onKeyDown={this.onKeyDownSearch}
                                    />
                                    <label style={{display: 'none'}} htmlFor="searchPost">Search articles</label>
                                    <span className={classname(styled['search-icon'], 'fr')}>
                                        <i className={classname('icon-search-black')} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classname(styled['navbar'], 'navbar')}>
                    <div className={classname('container', classContainer)}>
                        <ul>
                            <li className={classname(styled['navbar-home-icon'], 'mr-10')}>
                                <Link href={'/'}>
                                    <a title={this.props.defaultTitle}>
                                        <img alt={this.props.defaultTitle} src={HomeIcon} />
                                    </a>
                                </Link>
                            </li>
                            {
                                this.props.headerMenu ? this.props.headerMenu.map((menu, key) => {
                                    return (
                                        <li key={key.toString()} className={classname(menu.active && styled['active'])}>
                                            <Link href={'/category-by-id?slug=' + menu.slug + '&cid=' + menu.id} as={'/' + menu.slug + '-c' + menu.id + '.html'}>
                                                <a title={menu.name}>{menu.name}</a>
                                            </Link>
                                        </li>
                                    );
                                }) : null
                            }
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        defaultTitle: state.document.defaultTitle,
        headerMenu: state.headerMenu
    };
}

export default withRouter(connect(mapStateToProps)(DefaultHeader));
