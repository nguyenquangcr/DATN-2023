import React, {Fragment} from 'react';
import {withRouter} from 'next/router';
import classname from 'classnames';
import Link from 'next/link';

// Assets
import Logo from 'Static/images/meovathay.png';
import styled from './styles.module.scss';

class DefaultFooter extends React.Component {
    onClickBackTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    render() {
        return (
            <Fragment>
                <div id={classname(styled['footer'])} style={{display: 'block'}}>
                    <div className={classname(styled['footer-menu'])}>
                        <div className={classname(styled['container'], 'w1040')}>
                            <div className={classname(styled['row'], 'clearfix')}>
                                <div className={classname(styled['col'])}>
                                    <div className={classname(styled['logo-gray'])}>
                                        <img width={80} height={50} alt="Mẹo Vặt Hay - Trang thông tin và chia sẻ những mẹo vặt hay trong cuộc sống" src={Logo} />
                                    </div>
                                    <div className={classname(styled['blue-grey-text'], 'pt-10')}>
                                        <p className={classname(styled['text-600'])}>Mẹo Vặt Hay - Trang thông tin và chia sẻ những mẹo vặt hay trong cuộc sống</p>
                                        <p>Email: <a ref={'nofollow'} className={classname(styled['email'])} href="mailto:baomeovathay@gmail.com">baomeovathay@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className={classname(styled['col'])}>
                                    <p>
                                        <Link href={'/category-by-id?slug=doi-song&cid=1'} as={'/doi-song-c1.html'}>
                                            <a title="Đời sống">Đời sống</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=nha-dep&cid=51'} as={'/nha-dep-c51.html'}>
                                            <a title="Nhà đẹp">Nhà đẹp</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=me-be&cid=56'} as={'/me-be-c56.html'}>
                                            <a title="Mẹ & bé">Mẹ & bé</a>
                                        </Link>
                                    </p>
                                </div>
                                <div className={classname(styled['col'])}>
                                    <p>
                                        <Link href={'/category-by-id?slug=lam-dep&cid=7'} as={'/lam-dep-c7.html'}>
                                            <a title="Làm đẹp">Làm đẹp</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=giam-can&cid=44'} as={'/giam-can-c44.html'}>
                                            <a title="Giảm cân">Giảm cân</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=tri-mun&cid=45'} as={'/tri-mun-c45.html'}>
                                            <a title="Trị mụn">Trị mụn</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=dang-dep&cid=46'} as={'/dang-dep-c46.html'}>
                                            <a title="Dáng đẹp">Dáng đẹp</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=toc-dep&cid=47'} as={'/toc-dep-c47.html'}>
                                            <a title="Tóc đẹp">Tóc đẹp</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=tu-van&cid=48'} as={'/tu-van-c48.html'}>
                                            <a title="Tư vấn" >Tư vấn</a>
                                        </Link>
                                    </p>
                                </div>
                                <div className={classname(styled['col'])}>
                                    <p>
                                        <Link href={'/category-by-id?slug=thoi-trang&cid=2'} as={'/thoi-trang-c2.html'}>
                                            <a title="Thời trang">Thời trang</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=kham-pha&cid=52'} as={'/kham-pha-c52.html'}>
                                            <a title="Khám phá">Khám phá</a>
                                        </Link>
                                    </p>
                                </div>
                                <div className={classname(styled['col'])}>
                                    <p>
                                        <Link href={'/category-by-id?slug=am-thuc&cid=41'} as={'/am-thuc-c41.html'}>
                                            <a title="Ẩm thực">Ẩm thực</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={'/category-by-id?slug=nau-an&cid=6'} as={'/nau-an-c6.html'}>
                                            <a title="Nấu ăn">Nấu ăn</a>
                                        </Link>
                                    </p>
                                </div>
                                <div className={classname(styled['col'])}>
                                    <p>
                                        <a ref={'nofollow'} rel={'noopener noreferrer'} target={'_blank'} href="https://www.facebook.com/meovathaymoingay1" title="Kết nối với Mẹo Vặt Hay">Kết nối với Mẹo Vặt Hay</a>
                                    </p>
                                    <p className={classname(styled['social-connect'])}>
                                        <a ref={'nofollow'} rel={'noopener noreferrer'} title={'Kết nối Facebook với Mẹo Vặt Hay'} target={'_blank'} href="https://www.facebook.com/meovathaymoingay1">
                                            <span style={{padding: 0, marginRight: 5}} className="icon-facebook-black" /> Facebook
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classname(styled['footer-copyright'])}>
                        <div
                            className={classname(styled['container'], 'w1040')}>
                            <span className={classname(styled['text-caps'])}>© 2020 meovathay.vn</span>
                        </div>
                    </div>
                    <span id={classname(styled['back-top'])} onClick={this.onClickBackTop}>
                        <i className={classname(styled['icon-arrow-up'], 'icon-arrow-up')} />
                    </span>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(DefaultFooter);
