import React, {useState} from 'react';
import {notification} from 'antd';
// Assets
import styles from 'Modules/Pages/Login/styles.module.scss';
import classname from 'classnames';
import {useDispatch} from 'react-redux';
import {setProfileUser, setToken} from '../store';
import {apiLogin, apiSignUp, getProfileUser} from '../services/Login/login';

const Login = () => {
    const dispatch = useDispatch(); 
    //state
    const [statusForm, setStatusForm] = useState(false);

    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();

        var {name, uname, pass} = document.forms[0];

        if (statusForm) {
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
        } else {
            apiSignUp;
            try {
                const response = await apiSignUp({name: name.value, email: uname.value, password: pass.value});

                if (response.status == 201) {
                    notification.success({
                        message: 'Đăng ký thành công!',
                        duration: 500
                    });
                    document.getElementById('name').value = null;
                    document.getElementById('uname').value = null;
                    document.getElementById('pass').value = null;
                    setStatusForm(true);
                }
            } catch (error) {
                notification.error({
                    message: 'Đăng ký thất bại',
                    duration: 500
                });
            }
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
                        <h5 className='mt-5'>{statusForm ? 'Đăng nhập' : 'Đăng ký'}</h5>
                        <div className={classname(styles['inputs'])}>
                            {
                                statusForm == false && (<>
                                    <input id='name' type="text" name="name" placeholder="Tên người dùng" />
                                    <br /></>)
                            }
                            <input id='uname' type="text" name="uname" placeholder="Tên đăng nhập" />
                            <br />
                            <input id='pass' type="password" name="pass" placeholder="Mật khẩu" />
                        </div>
                        <br />
                        <br />
                        <div className={classname(styles['box-btl-login'])}>
                            <span onClick={() => setStatusForm(!statusForm)}>{
                                statusForm ? 'Đăng ký tại đây!' : 'Quay lại'
                            }</span>
                            <button type='submit'>{statusForm ? 'Đăng nhập' : 'Đăng ký'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;