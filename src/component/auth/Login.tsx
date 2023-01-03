import React, { useRef } from 'react';
import { loginAuth } from '../../logic/api/post';
import '../../styles/auth/Login.scss';

const Login = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    return (
        <div className="login_contain">
            <h1 className="text">로그인</h1>
            <div className="input_contain">
                <input className="id" ref={email} type="email" placeholder="id"/>
                <input className="pw" ref={password} type="password" placeholder='pw'/>
                <button className="login_btn" onClick={() => { loginAuth(email.current!.value, password.current!.value) } }>로그인</button>
            </div>
        </div>
    );
};

export default Login;