import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTokenCheck from '../hook/login/useTokenCheck';
import '../styles/Header.scss';

const Header = () => {
    const { tokenState } = useTokenCheck();

    const [url, setUrl] = useState<string[]>(['/', '/auth']);
    const [menuList, setMenuList] = useState<string[]>(['Main', 'Login']);
 
    useEffect(() => {
        if (tokenState) {
            setMenuList(['Main']);
            setUrl(['/']);
        }        
    }, [tokenState]);

    const logout = () => {
        alert('로그아웃 되었습니다!');
        localStorage.removeItem('token');
        window.location.href = "/";
    }

    return (
        <header className="header_contain">
            <div className="header_inner">
                <Link to="/"><p className="logo">wanted</p></Link>
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
                    {tokenState && <li className="menu_item logout" onClick={ () => {logout()}}>로그아웃</li>}
                </ul>
            </div>
        </header>
    );
};

export default Header;