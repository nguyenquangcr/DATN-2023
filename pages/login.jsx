import React, {useState} from 'react';
import {notification} from 'antd';
// Assets
import styles from 'Modules/Pages/Login/styles.module.scss';
import classname from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {setProfileUser, setToken} from '../store';
import {apiLogin, getProfileUser} from '../services/Login/login';

// User Login info
const database = [
    {
        username: 'user1',
        password: 'pass1'
    },
    {
        username: 'user2',
        password: 'pass2'
    }
];
  
const errors = {
    uname: 'invalid username',
    pass: 'invalid password'
};

const Login = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    //state
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                    dispatch(setProfileUser(profileUser.data));
                    localStorage.setItem('profileUser',JSON.stringify(profileUser.data));
                    setTimeout(() => {
                        window.location = '/';
                    }, 300);
                }
            }
        } catch (error) {
            console.log('error:', error);
            
        }
    };  

    return (
        <>
            <div className={classname(styles['box-form'])}>
                <div className={classname(styles['left'])}>
                    <div className={classname(styles['overlay'])}>
                        <h1>Hello World.</h1>
                        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          est sed felis aliquet sollicitudin
                        </p>
                        <span>
                            <p>login with social media</p>
                            <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" /> Login with
            Twitter
                            </a>
                        </span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={classname(styles['right'])}>
                        <h5>Login</h5>
                        <p>
                            {'Don\'t'} have an account? <a href="#">Creat Your Account</a> it takes less
        than a minute
                        </p>
                        <div className={classname(styles['inputs'])}>
                            <input type="text" name="uname" placeholder="user name" />
                            <br />
                            <input type="password" name="pass" placeholder="password" />
                        </div>
                        <br />
                        <br />
                        <div className={classname(styles['remember-me--forget-password'])}>
                            {/* Angular */}
                            <label>
                                <input type="checkbox" name="item" defaultChecked="" />
                                <span className={classname(styles['text-checkbox'])}>Remember me</span>
                            </label>
                            <p>forget password?</p>
                        </div>
                        <br />
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;