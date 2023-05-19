import React, {useState} from 'react';
import classnames from 'classnames';
import ProgressiveMedia from 'Components/ProgressiveMedia';

import styles from './styles.module.scss';

const defaultProps = {
    imageWidth: 570,
    imageHeight: 400,
    title: 'Thời trang'
};

function SliderNews(props) {
    const {posts = [], title, imageWidth, imageHeight} = props;

    const [activePostIndex, setActivePostIndex] = useState(0);

    if (!Array.isArray(posts)) {
        return null;
    }

    const activeLink = (index) => () => {
        if (activePostIndex !== index) {
            setActivePostIndex(index);

            const post = document.getElementById(`slider-news-post-${index}`);

            if (post) {
                post.scrollIntoView({block: 'nearest'});
            }

        }
    };

    const carouselStyle = {
        transform: `translateX(-${imageWidth * activePostIndex}px)`,
        transition: 'transform 0.3s'
    };

    return (
        <div className={classnames(styles['slider-news'], styles['mb-5'])}>
            <div className={styles['tab-title']}>
                <h3 className={'text-uppercase'}>
                    {title}
                </h3>
            </div>
            <div className={styles['section']} style={{height: imageHeight}}>
                <div className={styles['new-image']} style={{width: imageWidth}}>
                    <div className={styles['carousel']} style={carouselStyle}>
                        {posts.map((post, key) => (
                            <a href={post.link} key={key}>
                                <ProgressiveMedia
                                    src={post.image}
                                    thumb={post.thumbnail}
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                            </a>
                        ))}
                    </div>
                    <div className={styles['pagination']}>
                        {posts.map((_, key) => (
                            <span
                                key={key}
                                className={classnames({
                                    [styles['active']]: key === activePostIndex
                                })}
                                onClick={activeLink(key)}
                            >
                                {key}
                            </span>
                        ))}
                    </div>
                    <div className={styles['nav']}>
                        <button
                            className={classnames('btn', styles['prev'])}
                            onClick={activePostIndex ?
                                activeLink(activePostIndex - 1) :
                                activeLink(posts.length - 1)
                            }
                        >
                            ‹
                        </button>
                        <button
                            className={classnames('btn', styles['next'])}
                            onClick={activePostIndex < (posts.length - 1) ?
                                activeLink(activePostIndex + 1) :
                                activeLink(0)
                            }
                        >
                            ›
                        </button>
                    </div>
                </div>
                <div className={styles['post-list']}>
                    {posts.map((post, key) => (
                        <div
                            key={key}
                            id={`slider-news-post-${key}`}
                            className={classnames(
                                styles['post'],
                                {[styles['active']]: key === activePostIndex}
                            )}
                            onMouseOver={activeLink(key)}
                        >
                            <a href={post.link} title={post.title}>
                                {post.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

SliderNews.defaultProps = defaultProps;

export default SliderNews;
