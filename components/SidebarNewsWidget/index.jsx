import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// Components
import ProgressiveMedia from 'Components/ProgressiveMedia';

// Assets
import styles from './sidebar.module.scss';
import {getPostImage} from 'Libs/utils';

function SidebarNewsWidget(props) {
    let posts = props.posts || [];

    if (posts.length) {
        posts = posts.map((post) => {
            // Images
            post.background = getPostImage(post, props.background);

            return post;
        });
    }

    return (
        <div style={{...props.style}} className={classNames(styles['sidebar-widget-news'], styles['sidebar'], 'mb-20', props.className)}>
            <div className={classNames(styles['sidebar-header'], 'clearfix')}>
                <h2><span title={props.title}>{props.title}</span></h2>
            </div>
            <div className={styles['sidebar-contain']}>
                <ul>
                    {
                        !props.skeletonLoading && posts.length ? (
                            <>
                                {
                                    Array.isArray(posts) && posts.map((post) => (
                                        <li key={post.pid} className={'clearfix'}>
                                            <div className={styles['content']}>
                                                <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                                    <a className={styles['thumb']} title={post.title}>
                                                        <ProgressiveMedia alt={post.title} thumb={post.thumb} src={post.background} />
                                                    </a>
                                                </Link>
                                                <h3 className={styles['title']}>
                                                    <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                                        <a title={post.title}>{post.title}</a>
                                                    </Link>
                                                </h3>
                                            </div>
                                        </li>
                                    ))
                                }
                            </>
                        ) : (
                            <>
                                <li className={classNames(styles['progress-loading'], 'clearfix')}>
                                    <div className={classNames(styles['article'])}>
                                        <div className={classNames(styles['background'], styles['animated-load'])} />
                                        <div className={classNames(styles['article-right'])}>
                                            <div className={classNames(styles['title'], styles['animated-load'])} />
                                            <div className={classNames(styles['description'], styles['animated-load'])} />
                                        </div>
                                    </div>
                                </li>
                                <li className={classNames(styles['progress-loading'], 'clearfix')}>
                                    <div className={classNames(styles['article'])}>
                                        <div className={classNames(styles['background'], styles['animated-load'])} />
                                        <div className={classNames(styles['article-right'])}>
                                            <div className={classNames(styles['title'], styles['animated-load'])} />
                                            <div className={classNames(styles['description'], styles['animated-load'])} />
                                        </div>
                                    </div>
                                </li>
                                <li className={classNames(styles['progress-loading'], 'clearfix')}>
                                    <div className={classNames(styles['article'])}>
                                        <div className={classNames(styles['background'], styles['animated-load'])} />
                                        <div className={classNames(styles['article-right'])}>
                                            <div className={classNames(styles['title'], styles['animated-load'])} />
                                            <div className={classNames(styles['description'], styles['animated-load'])} />
                                        </div>
                                    </div>
                                </li>
                                <li className={classNames(styles['progress-loading'], 'clearfix')}>
                                    <div className={classNames(styles['article'])}>
                                        <div className={classNames(styles['background'], styles['animated-load'])} />
                                        <div className={classNames(styles['article-right'])}>
                                            <div className={classNames(styles['title'], styles['animated-load'])} />
                                            <div className={classNames(styles['description'], styles['animated-load'])} />
                                        </div>
                                    </div>
                                </li>
                                <li className={classNames(styles['progress-loading'], 'clearfix')}>
                                    <div className={classNames(styles['article'])}>
                                        <div className={classNames(styles['background'], styles['animated-load'])} />
                                        <div className={classNames(styles['article-right'])}>
                                            <div className={classNames(styles['title'], styles['animated-load'])} />
                                            <div className={classNames(styles['description'], styles['animated-load'])} />
                                        </div>
                                    </div>
                                </li>
                                <li className={classNames(styles['progress-loading'], 'clearfix')}>
                                    <div className={classNames(styles['article'])}>
                                        <div className={classNames(styles['background'], styles['animated-load'])} />
                                        <div className={classNames(styles['article-right'])}>
                                            <div className={classNames(styles['title'], styles['animated-load'])} />
                                            <div className={classNames(styles['description'], styles['animated-load'])} />
                                        </div>
                                    </div>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

const defaultProps = {
    skeletonLoading: false,
    className: '',
    title: 'TIN MỚI NHẤT',
    background: 'large', // large, normal, medium, small
    style: {
        position: 'relative',
        top: 0
    },
    posts: [
        {
            pid: 1,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        },
        {
            pid: 2,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        },
        {
            pid: 3,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        }
    ]
};

SidebarNewsWidget.defaultProps = defaultProps;

export default SidebarNewsWidget;
