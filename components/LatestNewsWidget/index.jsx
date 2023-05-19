import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import Link from 'next/link';

// Assets
import styles from './styles.module.scss';

const defaultProps = {
    posts: [
        {
            'pid': 256,
            'title': 'Những thương vụ \'cá lớn nuốt cá bé\' để mở rộng thị phần',
            'description': 'Năm 2017 chứng kiến nhiều cuộc M&A trong cùng lĩnh vực để đánh chiếm hệ thống phân phối của những "ông lớn".',
            'href': 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html',
            'time': '2020-04-02 04:34:48'
        }
    ]
};

function LatestNewsWidget(props) {
    let posts = props.posts || [];

    if (posts.length) {
        posts = posts.map((post) => {
            if (post.time) {
                // Format time to display
                const hour = moment(post.time, 'YYYY-MM-DD HH:mm:ss').format('HH');
                const minute = moment(post.time, 'YYYY-MM-DD HH:mm:ss').format('mm');

                post.recent = hour + ':' + minute;
            }

            return post;
        });
    }

    return (
        <div className={classnames(styles['sidebar-latest-news'], 'mb-20')} style={{display: 'inline-block'}}>
            <div className={styles['sidebar-header']}>
                <span><i className={classnames('icon-clock', styles['icon-clock'])} style={{display: 'inline-block'}} /> Tin mới nhất</span>
            </div>
            <div className={classnames(styles['sidebar-contain'], 'scrollbar-mac-osx')}>
                <ul>
                    {
                        Array.isArray(posts) && posts.map((post) => (
                            <li key={post.pid}>
                                <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                    <a title={post.title}>
                                        <div className={styles['time']}>{post.recent || '09:33'}</div>
                                        <div className={styles['text']}>{post.title}</div>
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default LatestNewsWidget;
