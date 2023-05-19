import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// Components
import ProgressiveMedia from 'Components/ProgressiveMedia';

// Assets
import styles from './styles.module.scss';

function FeaturedWidget(props) {
    let posts = props.posts || [];

    if (posts.length) {
        posts = posts.map((post, key) => {
            if (post.pid) {
                if (key < 1) {
                    // Featured news
                    if (post.images && post.images.normal && !post.background) {
                        post.background = post.images.normal;
                    }
                } else if (post.images && post.images.medium) {
                    post.background = post.images.medium;
                }
            }

            return post;
        });
    }

    return (
        <div className={classNames(styles['featured-news'], props.className)}>
            <div className='clearfix'>
                {
                    !props.skeletonLoading && posts.length ? (
                        <>
                            <div key={posts[0].pid} className={classNames(styles['featured-news-left'],  'fl')}>
                                <Link href={'/post?slug=' + posts[0].slug + '&pid=' + posts[0].pid} as={'/' + posts[0].slug + '-p' + posts[0].pid + '.html'}>
                                    <a title={posts[0].title} className={classNames(styles['thumb'])}>
                                        <ProgressiveMedia alt={posts[0].title} thumb={posts[0].thumb} src={posts[0].background} />
                                    </a>
                                </Link>
                                <h2 className={styles['title']}>
                                    <Link href={'/post?slug=' + posts[0].slug + '&pid=' + posts[0].pid} as={'/' + posts[0].slug + '-p' + posts[0].pid + '.html'}>
                                        <a title={posts[0].title}>
                                            {posts[0].title}
                                        </a>
                                    </Link>
                                </h2>
                                <p className={styles['description']}>
                                    {posts[0].description}
                                </p>
                            </div>
                            <div className={classNames(styles['featured-news-right'], 'fl')}>
                                <ul>
                                    {
                                        posts.map((post, key) => {
                                            if (key > 0 && key < 3) {
                                                return (
                                                    <li key={post.pid}>
                                                        <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                                            <a title={post.title} className={styles['featured-image']}>
                                                                <ProgressiveMedia alt={post.title} thumb={post.thumb} src={post.background} />
                                                            </a>
                                                        </Link>
                                                        <h3 className={styles['featured-title']}>
                                                            <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                                                <a title={post.title}>
                                                                    {post.title}
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                    </li>
                                                );
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={classNames(styles['featured-news-left'], styles['progress-loading'], 'fl')}>
                                <div className={classNames(styles['article'])}>
                                    <div className={classNames(styles['background'], styles['animated-load'])} />
                                    <div className={classNames(styles['title'], styles['animated-load'])} />
                                    <div className={classNames(styles['description'], styles['animated-load'])} />
                                </div>
                            </div>
                            <div className={classNames(styles['featured-news-right'], styles['progress-loading'], 'fl')}>
                                <div className={classNames(styles['article'])}>
                                    <div className={classNames(styles['background'], styles['animated-load'])} />
                                    <div className={classNames(styles['title'], styles['animated-load'])} />
                                    <div className={classNames(styles['description'], styles['animated-load'])} />
                                </div>
                                <div className={classNames(styles['article'])}>
                                    <div className={classNames(styles['background'], styles['animated-load'])} />
                                    <div className={classNames(styles['title'], styles['animated-load'])} />
                                    <div className={classNames(styles['description'], styles['animated-load'])} />
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}

const defaultProps = {
    skeletonLoading: false,
    className: '',
    posts: [
        {
            pid: 1,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            thumb: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        },
        {
            pid: 2,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            thumb: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        },
        {
            pid: 3,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            thumb: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        }
    ]
};

FeaturedWidget.defaultProps = defaultProps;

export default FeaturedWidget;
