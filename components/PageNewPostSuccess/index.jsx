import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// Assets
import image from 'Static/images/image-new-post-user.png';
import styles from './styles.module.scss';

function PageNewPostSuccess(props) {
    return (
        <div className={classNames(styles['post-not-found'], props.className)} >
            <img alt="Page not found" src={image} />
            <p>Bạn đã thêm bài viết thành công. Bài viết của bạn đang được xét duyệt bởi quản lý page</p>
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

PageNewPostSuccess.defaultProps = defaultProps;

export default PageNewPostSuccess;
