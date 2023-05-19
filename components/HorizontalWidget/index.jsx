import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// Components
import ProgressiveMedia from 'Components/ProgressiveMedia';

// Utils
import {formatTime, getPostImage} from 'Libs/utils';

// Assets
import styles from './styles.module.scss';

function HorizontalWidget(props) {
    try {
        let posts = props.posts || [];

        if (posts.length) {
            // Validate and format time
            posts = posts.map((post) => {
                if (post) {
                    if (post.time) {
                        // Format time to display
                        let time = formatTime(post.time, 'YYYY-MM-DD HH:mm:ss');

                        if (time && time.string) {
                            post.recent = time.string;
                        }
                    }

                    // Images
                    post.background = getPostImage(post, props.background);

                    return post;
                }
            });
        }

        return (
            <ul className={classNames(styles['horizontal-news'], props.isSmallLayout && styles['horizontal-small'], props.className)}>
                {
                    !props.skeletonLoading && posts.length ? (
                        <>
                            {
                                posts.map((post, key) => {
                                    if (key + 1 > props.number) {
                                        return null;
                                    }

                                    return (
                                        <li className={classNames(props.isRowReverse && styles['row-reverse'], 'clearfix')} key={post.pid}>
                                            <div className={classNames(styles['left'])}>
                                                <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                                    <a title={post.title}>
                                                        <ProgressiveMedia alt={post.title} thumb={post.thumb} src={post.background} />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className={styles['right']}>
                                                <h3 className={styles['title']}>
                                                    <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                                        <a title={post.title}>{post.title}</a>
                                                    </Link>
                                                </h3>
                                                {
                                                    props.isShowCategory ? (
                                                        <div className={styles['meta']}>
                                                            <Link href={'/category-by-id?slug=' + post.category.shorten + '&cid=' + post.category.id} as={'/' + post.category.shorten + '-c' + post.category.id + '.html'}>
                                                                <a title={post.title} className={styles['meta-category']}>
                                                                    {post.category && post.category.title ? post.category.title : ''}
                                                                </a>
                                                            </Link> - <span className={styles['meta-time']}>{post.recent || '3 giờ trước'}</span>
                                                        </div>
                                                    ) : null
                                                }
                                                {
                                                    props.isShowDescription ? (
                                                        <span className={styles['description']}>
                                                            {post.description}
                                                        </span>
                                                    ) : null
                                                }
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </>
                    ) : (
                        <>
                            {
                                Array(props.skeletonNumber).fill(
                                    <li key={1} className={classNames(styles['progress-loading'], 'clearfix')}>
                                        <div className={classNames(styles['article'])}>
                                            <div className={classNames(styles['article-left'])}>
                                                <div className={classNames(styles['background'], styles['animated-load'])} />
                                            </div>
                                            <div className={classNames(styles['article-right'])}>
                                                <div className={classNames(styles['title'], styles['animated-load'])} />
                                                <div className={classNames(styles['description'], styles['animated-load'])} />
                                                <div className={classNames(styles['category'], styles['animated-load'])} />
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        </>
                    )
                }
            </ul>
        );
    } catch (error) {
        // Error
    }
}

const defaultProps = {
    skeletonLoading: false,
    skeletonNumber: 1,
    number: 10,
    className: '',
    isShowCategory: true,
    isShowDescription: true,
    isRowReverse: false,
    isSmallLayout: false,
    background: 'large', // large, normal, medium, small
    posts: [
        {
            pid: 1,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            slug: 'harper-beckham-nam-tay-bo-o-san-bay-miami',
            thumb: '//image.tuoitreplus.com/upload/2018/03/250x156/adc9rp7f53.jpg',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html',
            time: '2020-04-04 11:06:15',
            category: {
                'id': 12,
                'title': 'Giải trí',
                'slug': 'giai-tri',
                'href': 'http://localhost:8012/giai-tri.htm'
            }
        },
        {
            pid: 2,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            slug: 'harper-beckham-nam-tay-bo-o-san-bay-miami',
            thumb: '//image.tuoitreplus.com/upload/2018/03/250x156/adc9rp7f53.jpg',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html',
            time: '2020-04-04 11:06:15',
            category: {
                'id': 12,
                'title': 'Giải trí',
                'slug': 'giai-tri',
                'href': 'http://localhost:8012/giai-tri.htm'
            }
        },
        {
            pid: 3,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            slug: 'harper-beckham-nam-tay-bo-o-san-bay-miami',
            thumb: '//image.tuoitreplus.com/upload/2018/03/250x156/adc9rp7f53.jpg',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html',
            time: '2020-04-04 11:06:15',
            category: {
                'id': 12,
                'title': 'Giải trí',
                'slug': 'giai-tri',
                'href': 'http://localhost:8012/giai-tri.htm'
            }
        }
    ]
};

HorizontalWidget.defaultProps = defaultProps;

export default HorizontalWidget;
