import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
    const [url, setUrl] = useState<string[]>(['/', '/todo', '/auth']);
    const [menuList, setMenuList] = useState<string[]>(['Menu', 'Todo', 'Login']);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setMenuList(['Menu', 'Todo', 'Logout']);
            setUrl(['/', '/todo', '']);
        }
    }, []);

    const logout = () => {
        alert('로그아웃 되었습니다!');
        localStorage.removeItem('token');
        window.location.href = "/";
    }

    return (
        <header className="header_contain">
            <div className="header_inner">
                <img className="logo" src="" alt="로고" />
                <ul className="menu_list">
                    {
                        menuList.map((item, index) => {
                            return (
                                <>
                                    <Link to={url[index]} key={index}>
                                        <li className="menu_item">{item}</li>
                                    </Link>
                                </>
                            )
                        })
                    }
                    {localStorage.getItem('token') && <li className="menu_item logout" onClick={ () => {logout()}}>로그아웃</li>}
                </ul>
            </div>
        </header>
    );
};

export default Header;