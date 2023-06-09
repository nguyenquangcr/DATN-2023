import React, {useState} from 'react';
import Link from 'next/link';
import LatestNewsIcon from 'Static/images/icon-lastest.svg';
import IconHome from 'Static/images/icon-home.svg';
import {useSelector} from 'react-redux';

const LoginComponent = () => {
    const token = typeof window !== 'undefined' ? localStorage?.getItem('accessToken') : null;
    const profileUser = typeof window !== 'undefined' ? JSON.parse(localStorage?.getItem('profileUser')) : null;
    const state = useSelector((state) => state);
    //state
    const [tokenState, setToken] = useState(null);

    React.useEffect(() => {
        setToken(token);
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('profileUser');
        setToken(null);
    };

    return (
        <>
            {tokenState !== null ? (
                <>
                    <Link href={'/newPost'} as={'/newPost'}>
                        <a title="Tin mới" style={{fontWeight: '600'}}>
                       + Thêm bài viết
                        </a>
                    </Link>
                    <span style={{
                        height: '32px',
                        lineHeight: '30px',
                        padding: '0 10px',
                        borderRadius: '3px',
                        fontSize: '14px',
                        color: '#757575',
                        display: 'inline-block'
                    }}>
                  Chào {profileUser?.name}, 
                        <span style={{cursor: 'pointer'}} onClick={() => handleLogout()}>Đăng xuất</span>
                    </span>
                </>
            ) : (
                <Link href={'/login'} as={'/login'}>
                    <a title="Tin mới">
                        <img src={LatestNewsIcon} alt="Tin mới" />
                        Đăng nhập
                    </a>
                </Link>
            )} 
        </>
    );
};

export default LoginComponent;
