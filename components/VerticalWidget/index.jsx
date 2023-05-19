import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import ProgressiveMedia from 'Components/ProgressiveMedia';
import {getPostImage} from 'Libs/utils';
import styles from './styles.module.scss';

const defaultProps = {
    className: '',
    title: 'Quý cô sành',
    isShowTag: true,
    isShowDescription: true,
    background: 'large',
    post: {}
};

function VerticalWidget(props) {
    const {title, post} = props;
    const background = getPostImage(post, props.background);

    return (
        <div className={classnames(styles['featured'])}>
            <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                <a title={post.title}>
                    <div className={styles['thumb-image']}>
                        {
                            background && <ProgressiveMedia
                                scaleOnHover
                                alt={post.title}
                                thumb={post.thumbnail}
                                src={background}
                            />
                        }
                        {
                            props.isShowTag && <div className={styles['tag']}>{title}</div>
                        }
                    </div>
                    <h3 className={styles['title']}>
                        {post.title}
                    </h3>
                </a>
            </Link>
            {
                props.isShowDescription ? (
                    <p className={styles['description']}>
                        {post.description}
                    </p>
                ) : null
            }
        </div>
    );
}

VerticalWidget.defaultProps = defaultProps;

export default VerticalWidget;
