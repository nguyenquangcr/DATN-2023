import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import ProgressiveMedia from 'Components/ProgressiveMedia';

import styles from './styles.module.scss';
import {getPostImage} from 'Libs/utils';

const defaultProps = {
    className: '',
    title: 'Quý cô sành',
    postNumber: 5,
    background: 'large', // large, normal, medium, small
    posts: []
};

function SidebarHighlightWidget(props) {
    const {title, posts} = props;
    const featurePost = posts.length ? posts[0] : {};
    const featureBackground = getPostImage(featurePost, props.background);

    return (
        <div style={{...props.style}} className={classnames(styles['horizontal-widget-news'], 'mb-20')}>
            <div className={styles['tab-title']}>
                <h2><span>{title}</span></h2>
            </div>
            <div className={styles['featured']}>
                <Link href={'/post?slug=' + featurePost.slug + '&pid=' + featurePost.pid} as={'/' + featurePost.slug + '-p' + featurePost.pid + '.html'}>
                    <a title={featurePost.title}>
                        <h3 className={styles['title']}>
                            {featurePost.title}
                        </h3>
                        <div className={styles['thumb-image']}>
                            {
                                featurePost.background && <ProgressiveMedia
                                    scaleOnHover
                                    alt={featurePost.title}
                                    thumb={featurePost.thumb}
                                    src={featureBackground}
                                />
                            }
                            <div className={styles['tag']}>{title}</div>
                        </div>
                    </a>
                </Link>
                <p className={styles['description']}>
                    {featurePost.description}
                </p>
            </div>
            <div className={styles['post-list']}>
                {
                    posts.map((post, key) => {
                        if (key >= 1 && key <= props.postNumber) {
                            return (
                                <div className={styles['post']} key={key}>
                                    <h4>
                                        <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                            <a title={post.title}>{post.title}</a>
                                        </Link>
                                    </h4>
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}

SidebarHighlightWidget.defaultProps = defaultProps;

export default SidebarHighlightWidget;
