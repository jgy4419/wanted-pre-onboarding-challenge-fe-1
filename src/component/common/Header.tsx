import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTokenCheck from '../../utils/hooks/useTokenCheck';
import * as Head from '../../styles/styledComponents/styledHeader';
import { logout } from '../auth/hooks/useLogout';

const Header = () => {
    const { tokenState } = useTokenCheck();

    const [url, setUrl] = useState(['/', '/auth']);
    const [menuList, setMenuList] = useState(['Main', 'Login']);
 
    useEffect(() => {
        if (tokenState) {
            setMenuList(['Main']);
            setUrl(['/']);
        }        
    }, [tokenState]);

    return (
        <Head.HeaderContain>
            <Head.GlobalStyle/>
            <Head.HeaderInner>
                <Link to="/"><Head.Logo>wanted</Head.Logo></Link>
                <Head.MenuList>
                    {
                        menuList.map((item, index) => {
                            return (
                                <>
                                    <Link to={url[index]} key={index}>
                                        <Head.MenuItem>{item}</Head.MenuItem>
                                    </Link>
                                </>
                            )
                        })
                    }
                    {tokenState && <Head.MenuItem onClick={ () => {logout()}}>로그아웃</Head.MenuItem>}
                </Head.MenuList>
            </Head.HeaderInner>
        </Head.HeaderContain>
    );
};

export default Header;