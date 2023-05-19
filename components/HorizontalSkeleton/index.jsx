import React from 'react';
import classNames from 'classnames';

// Assets
import styles from './styles.module.scss';

function HorizontalSkeleton(props) {

    try {
        let rows = [];

        if (props.number) {
            for (let i = 0; i < props.number; i++) {
                rows.push(i);
            }
        }

        return (
            <ul className={classNames(styles['horizontal-skeleton'], props.className)}>
                {
                    rows.length ? rows.map((value) => {
                        return (
                            <li key={value} className={classNames(styles['progress-loading'], 'clearfix')}>
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
                        );
                    }) : null
                }
            </ul>
        );
    } catch (error) {
        // Error
    }
}

const defaultProps = {
    className: '',
    number: 3
};

HorizontalSkeleton.defaultProps = defaultProps;

export default HorizontalSkeleton;
