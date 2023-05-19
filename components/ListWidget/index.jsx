import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import styles from './styles.module.scss';

const defaultProps = {
    className: '',
    number: 10,
    posts: []
};

function ListWidget(props) {
    const {posts} = props;

    return (
        <div style={{...props.style}} className={classnames(styles['widget'], 'mb-20')}>
            <div className={styles['widget-list']}>
                {
                    posts.map((post, key) => {
                        if (key >= props.number) {
                            return null;
                        }

                        return (
                            <div className={styles['post']} key={'widget-list-' + post.pid}>
                                <h3>
                                    <Link href={'/post?slug=' + post.slug + '&pid=' + post.pid} as={'/' + post.slug + '-p' + post.pid + '.html'}>
                                        <a title={post.title}>{post.title}</a>
                                    </Link>
                                </h3>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

ListWidget.defaultProps = defaultProps;

export default ListWidget;
