import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// Assets
import ErrorImg from 'Static/images/error-404.jpg';
import styles from './styles.module.scss';

function PageNotFound(props) {
    return (
        <div className={classNames(styles['post-not-found'], props.className)} >
            <img alt="Page not found" src={ErrorImg} />
            <p>Xin lỗi bạn, chúng tôi không tìm thấy bài viết này.</p>
            <p>Mời bạn quay về trang chủ để xem những tin tức mới nhất.</p>
            <Link href="/">
                <a title="Trở về trang chủ" className={classNames(styles['go-back-to-home'])}>Trở về trang chủ</a>
            </Link>
        </div>
    );
}

const defaultProps = {
    className: ''
};

PageNotFound.defaultProps = defaultProps;

export default PageNotFound;
