import React from 'react';
import App from 'next/app';
import {Provider} from 'react-redux';
import withReduxStore from '../libs/with-redux-store';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// Components
import Header from 'Modules/Layouts/Header';
import DefaultHeader from 'Modules/Layouts/DefaultHeader';
import DefaultFooter from 'Modules/Layouts/DefaultFooter';

// Actions
import {setHeaderMenu} from '../store';

// Services
import * as MenuService from 'Services/Menu/Info';

// Assets
import 'Modules/Layouts/Header/styles.scss';
import 'antd/dist/reset.css';

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {};

        let states = ctx.reduxStore.getState();

        if (typeof states.headerMenu === 'undefined' || !states.headerMenu.length) {
            let menu = MenuService.getList();

            if (menu) {
                await menu.then((response) => {
                    if (response && response.data && response.data.data && response.data.data.menus) {
                        let menus = response.data.data.menus;

                        ctx.reduxStore.dispatch(setHeaderMenu(menus));
                    }
                });
            }
        }

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps};
    }

    render() {
        const {Component, pageProps, reduxStore} = this.props;

        return (
            <>
                <Provider store={reduxStore}>
                    <Header pageTitle="Mẹo Vặt Hay - Trang thông tin và chia sẻ những mẹo vặt hay trong cuộc sống" />
                    <div className="meovathay-wrapper">
                        <DefaultHeader />
                        <div id="body">
                            <Component {...pageProps} />
                        </div>
                        <DefaultFooter />
                    </div>
                </Provider>
            </>
        );
    }
}

export default withReduxStore(MyApp);
