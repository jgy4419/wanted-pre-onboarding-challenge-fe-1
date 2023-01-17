import { useRef, KeyboardEvent } from 'react';
import { useLoginAuth } from '../../hook/api/auth/useAuthPost';
import '../../styles/auth/Login.scss';

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
        <div className="login_contain">
            <h1 className="text">로그인</h1>
            <div className="input_contain">
                <input className="id" ref={email} type="email" placeholder="id"
                    onKeyDown={(keyBoard) => { loginState(keyBoard) }}
                />
                <input className="pw" ref={password} type="password" placeholder='pw'
                    onKeyDown={(keyBoard) => { loginState(keyBoard) }}
                />
                <button className="login_btn" onClick={() => { loginAuth.mutate({ email: email.current!.value, password: password.current!.value }) } }>로그인</button>
            </div>
        </div>
    );
};

export default Login;