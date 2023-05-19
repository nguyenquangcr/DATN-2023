import React, {Fragment} from 'react';
import {withRouter} from 'next/router';
import classname from 'classnames';

// Components
import PageNotFound from 'Components/PageNotFound';

// Utils
import {handleError} from 'Libs/utils';

const PATH = 'application/pages/404.jsx';

class Page404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.myRef = React.createRef();
    }

    render() {
        try {
            return (
                <Fragment>
                    <div ref={this.myRef} className="container">
                        <div className={classname('container-body clearfix w1040')}>
                            <div className={classname('clearfix w1040')}>
                                <PageNotFound />
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        } catch (error) {
            handleError(error, {
                actionName: 'render',
                path: PATH,
                args: {}
            });
        }
    }
}

export default withRouter(Page404);
