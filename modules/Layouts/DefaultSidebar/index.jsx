import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';
import Link from 'next/link';
import classname from 'classnames';

// Assets
import styled from './styles.module.scss';

const PATH = 'application/modules/Layouts/DefaultSidebar/index.jsx';

class DefaultSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        
    }

    render() {
        return (
            <Fragment>
                <div id="sidebar" className={classname(styled['sidebar'])}>
                    <ul className={classname(styled['top-sidebar'])}>
                        <li>
                            <span className={classname(styled['icon'])}>
                                <svg width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fillRule="nonzero"><path d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z" opacity="0.1" /><path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z" /></g></svg>
                            </span>
                            <span className={classname(styled['title'])}>
                                Tin mới
                            </span>
                        </li>
                        <li className={classname(styled['active'])}>
                            <span className={classname(styled['icon'])}>
                                <svg width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fillRule="nonzero"><path d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z" opacity="0.1" /><path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z" /></g></svg>
                            </span>
                            <span className={classname(styled['title'])}>
                                Tin nóng
                                <span className={classname(styled['counter'])}>6</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        defaultTitle: state.document.defaultTitle,
        headerMenu: state.headerMenu
    };
}

export default withRouter(connect(mapStateToProps)(DefaultSidebar));