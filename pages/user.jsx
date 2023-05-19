import React from 'react';
import classname from 'classnames';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Editor
const FroalaEditor = dynamic(() => import('Components/FroalaEditor'), {
    ssr: false
});

import styles from 'Modules/Pages/User/styles.module.scss';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div ref={this.myRef} className={classname('container', styles['container'])} style={{background: '#fff'}}>
                <div className={classname('container-body clearfix w1040 mt-20', styles['container-body'])} style={{border: 0, background: '#fff'}}>
                    <div className={classname('container-left fl w720 pb-20', styles['container-left'])}>
                        <textarea className={classname(styles['title'], 'mb-20')} value={'Bóc giá đồ ngủ của "ác nữ" Cheon Seo Jin (Penthouse 2): Toàn hàng hiệu sang xịn, có bộ lên tới 44 triệu đồng\n'} />
                        <FroalaEditor />
                    </div>
                    <div className={classname('container-right col-sticky fr mt-20 w300')}>
                        <h3>Thể loại</h3>
                        <h3>Từ khóa</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
