import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// Components
import ProgressiveMedia from 'Components/ProgressiveMedia';

// Assets
import styles from './styles.module.scss';

function VerticalNewsWidget(props) {
    let posts = props.posts || [];

    if (posts.length) {
        posts = posts.map((post) => {
            // Images
            if (post.images && post.images.normal) {
                post.background = post.images.normal;
            }

            return post;
        });
    }

    return (
        <div className={classNames(styles['vertical-news'], props.className)} style={{display: 'inline-block'}}>
            <div className="clearfix">
                <div className={classNames(styles['vertical-news-title'])}>
                    <h2>
                        <Link href={'/category-by-id?slug=' + props.slug + '&cid=' + props.cid} as={'/' + props.slug + '-c' + props.cid + '.html'}>
                            <a title={props.title}>{props.title}</a>
                        </Link>
                    </h2>
                </div>
                {
                    posts && posts.length > 2 ? (
                        <>
                            <div className={classNames(styles['vertical-news-featured'])}>
                                <Link href={'/post?slug=' + posts[0].slug + '&pid=' + posts[0].pid} as={'/' + posts[0].slug + '-p' + posts[0].pid + '.html'}>
                                    <a title={posts[0].title} className={classNames(styles['vertical-news-featured-thumb'])}>
                                        <ProgressiveMedia alt={posts[0].title} thumb={posts[0].thumb} src={posts[0].background} />
                                    </a>
                                </Link>
                                <h3 className={classNames(styles['vertical-news-featured-title'])}>
                                    <Link href={'/post?slug=' + posts[0].slug + '&pid=' + posts[0].pid} as={'/' + posts[0].slug + '-p' + posts[0].pid + '.html'}>
                                        <a title={posts[0].title}>{posts[0].title}</a>
                                    </Link>
                                </h3>
                                <p className={classNames(styles['vertical-news-featured-description'])}>
                                    {posts[0].description}
                                </p>
                            </div>
                            <div className="clearfix mt-20">
                                <ul className={classNames(styles['vertical-news-sub'])}>
                                    <li>
                                        <h4>
                                            <Link href={'/post?slug=' + posts[1].slug + '&pid=' + posts[1].pid} as={'/' + posts[1].slug + '-p' + posts[1].pid + '.html'}>
                                                <a title={props.posts[1].title}>{props.posts[1].title}</a>
                                            </Link>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            <Link href={'/post?slug=' + posts[2].slug + '&pid=' + posts[2].pid} as={'/' + posts[2].slug + '-p' + posts[2].pid + '.html'}>
                                                <a title={props.posts[2].title}>{props.posts[2].title}</a>
                                            </Link>
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : null
                }
            </div>
        </div>
    );
}

const defaultProps = {
    className: '',
    title: 'Xã Hội',
    href: '',
    slug: '',
    cid: 1,
    posts: [
        {
            pid: 123,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        },
        {
            pid: 123,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        },
        {
            pid: 123,
            title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
            description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
            background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
            href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
        }
    ]
};

VerticalNewsWidget.defaultProps = defaultProps;

export default VerticalNewsWidget;
