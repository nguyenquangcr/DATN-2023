import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// Assets
import styles from './styles.module.scss';

function Pagination(props) {
    try {
        let currentPage = props.currentPage;
        let arrPageRender = [];
        const pageNumber = props.total && props.pageSize ? Math.round(props.total / props.pageSize) : 1;

        // Validate current page
        if (currentPage < 1 || currentPage > pageNumber) {
            currentPage = 1;
        }

        if (pageNumber > 1) {
            let beforePage = currentPage - 3;
            let afterPage = currentPage + 3;

            if (beforePage < 1) {
                afterPage = afterPage + Math.abs(beforePage);
                beforePage = 1;
            }

            if (afterPage > pageNumber) {
                afterPage = pageNumber;
            }

            for (let page = 1; page <= pageNumber; page++) {
                if (page >= beforePage && page <= afterPage) {
                    arrPageRender.push(page);
                }
            }
        }

        return (
            <ul className={classNames(styles['pagination'])}>
                {
                    pageNumber && arrPageRender.length ? arrPageRender.map((page) => {
                        return (
                            <li key={page.toString()} className={classNames(page === currentPage && styles['active'])}>
                                <h4>
                                    <Link href={props.href + '?page=' + page}>
                                        <a title={'Trang ' + page}>{page}</a>
                                    </Link>
                                </h4>
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
    href: '/', // => http://abc.com/lam-dep-c7.html?page=2
    currentPage: 1,
    pageSize: 1,
    total: 3
};

Pagination.defaultProps = defaultProps;

export default Pagination;
