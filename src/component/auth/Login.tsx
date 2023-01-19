import { useRef, KeyboardEvent } from 'react';
import { useLoginAuth } from '../../hook/api/auth/useAuthPost';
import * as LoginStyle from '../../styles/styledComponents/auth/styledLogin';

const Login = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const loginAuth = useLoginAuth();
    const loginState = (enter: KeyboardEvent): void => {
        if (enter.key === 'Enter') {
            loginAuth.mutate({ email: email.current!.value, password: password.current!.value })
        }        
    }
    return (
        <LoginStyle.LoginContain>
            <LoginStyle.Text>로그인</LoginStyle.Text>
            <LoginStyle.InputContain>
                <LoginStyle.AuthInput ref={email} type="email" placeholder="id"
                    onKeyDown={(keyBoard) => { loginState(keyBoard) }}
                />
                <LoginStyle.AuthInput ref={password} type="password" placeholder='pw'
                    onKeyDown={(keyBoard) => { loginState(keyBoard) }}
                />
                <LoginStyle.LoginBtn onClick={() => { loginAuth.mutate({ email: email.current!.value, password: password.current!.value }) } }>로그인</LoginStyle.LoginBtn>
            </LoginStyle.InputContain>
        </LoginStyle.LoginContain>
    );
};

export default Login;