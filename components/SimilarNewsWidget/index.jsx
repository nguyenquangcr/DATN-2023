import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import ProgressiveMedia from 'Components/ProgressiveMedia';

// Assets
import styles from './styles.module.scss';

function SimilarCategoryNews(props) {
    let posts = props.posts || [];

    if (posts.length) {
        posts = posts.map((post) => {
            if (post.pid) {
                if (post.images && post.images.medium) {
                    post.background = post.images.medium;
                }
            }

            return post;
        });
    }

    return (
        <div className={classNames(styles['similar-news'])}>
            <div className={styles['header']}>{props.title}</div>
            <ul className={styles['posts']}>
                <div className={classNames(styles['rows'], styles['space-between'])}>
                    {Array.isArray(posts) && posts.map((post, key) => {
                        if (key < props.number) {
                            return (
                                <li key={key} className={classNames(styles['post'], styles['card'])}>
                                    <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                        <a title={post.title}>
                                            <ProgressiveMedia thumb={post.thumb} src={post.background} />
                                        </a>
                                    </Link>
                                    <div className={classNames(styles['post-header'], 'pt-10')}>
                                        <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                            <a className={styles['title']} title={post.title}>
                                                {post.title}
                                            </a>
                                        </Link>
                                    </div>
                                </li>
                            );
                        }
                    })}
                </div>
            </ul>
        </div>
    );
}

const defaultProps = {
    className: '',
    title: 'BÀI VIẾT LIÊN QUAN',
    number: 3,
    posts: [
        {
            pid: 123,
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
            pid: 123,
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
            pid: 123,
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

SimilarCategoryNews.defaultProps = defaultProps;

export default SimilarCategoryNews;
