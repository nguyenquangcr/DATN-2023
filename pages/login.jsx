import React, {useState} from 'react';
import {notification} from 'antd';
// Assets
import styles from 'Modules/Pages/Login/styles.module.scss';
import classname from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {setProfileUser, setToken} from '../store';
import {apiLogin, getProfileUser} from '../services/Login/login';

const Login = () => {
    const dispatch = useDispatch(); 
    
    //state

    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();

        var {uname, pass} = document.forms[0];

        try {
            const response = await apiLogin({username: uname.value, password: pass.value});

            if (response.status == 201) {
                dispatch(setToken(response.data.access_token));
                localStorage.setItem('accessToken', response.data.access_token);
                const profileUser = await getProfileUser();

                if (profileUser.status == 200) 
                {
                    notification.success({
                        message: 'Đăng nhập thành công!',
                        duration: 500
                    });
                    dispatch(setProfileUser(profileUser.data));
                    localStorage.setItem('profileUser',JSON.stringify(profileUser.data));
                    setTimeout(() => {
                        window.location = '/';
                    }, 300);
                }
            }
        } catch (error) {
            notification.error({
                message: 'Sai tài khoản hoặc mật khẩu!',
                duration: 500
            });
        }
    };  

    return (
        <>
            <div className={classname(styles['box-form'])}>
                <div className={classname(styles['left'])}>
                    <div className={classname(styles['overlay'])}>
                        <h1>ĐĂNG NHẬP.</h1>
                        <span>
                            <p>Đăng nhập với các nền tảng mạng xã hội</p>
                            <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="#">
                                <i className="fa fa-google" aria-hidden="true" /> Login with
            Google
                            </a>
                        </span>
                    </div>
                </div>
                <form style={{minWidth: '350px'}} onSubmit={handleSubmit}>
                    <div className={classname(styles['right'])}>
                        <h5 className='mt-5'>Đăng nhập</h5>
                        {/* <p>
                            {'Don\'t'} have an account? <a href="#">Creat Your Account</a> it takes less
        than a minute
                        </p> */}
                        <div className={classname(styles['inputs'])}>
                            <input type="text" name="uname" placeholder="Tên đăng nhập" />
                            <br />
                            <input type="password" name="pass" placeholder="Mật khẩu" />
                        </div>
                        <br />
                        <br />
                        {/* <div className={classname(styles['remember-me--forget-password'])}>
                            <label>
                                <input type="checkbox" name="item" defaultChecked="" />
                                <span className={classname(styles['text-checkbox'])}>Nhớ tôi</span>
                            </label>
                            <p>Quên mật khẩu?</p>
                        </div> */}
                        <br />
                        <button type='submit'>Đăng nhập</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;