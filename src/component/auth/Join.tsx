import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailCheck, passwordCheck } from '../../logic/signUp';
import { createUser } from '../../logic/api/post';
import '../../styles/auth/Join.scss';

const Join = () => {
    const navigate = useNavigate();

    const [emailCheck_state, setEmailCheck_state] = useState(false);
    const [pwCheck_state, setPwCheck_state] = useState(false);

    const email = useRef<HTMLInputElement>(null);
    const pw1 = useRef<HTMLInputElement>(null);
    const pw2 = useRef<HTMLInputElement>(null);

    function check() {
        setEmailCheck_state(emailCheck(email.current!.value));
        setPwCheck_state(passwordCheck(pw1.current!.value, pw2.current!.value));
    }
    function join() {
        createUser(email.current!.value, pw1.current!.value);
        navigate('/');
    }
    useEffect(() => {
        if (emailCheck_state && pwCheck_state) {
            alert('유효성 검사가 완료 되었습니다! 회원가입 버튼을 눌러주세요.');
        }
    }, [emailCheck_state, pwCheck_state]);
    return (
        <div className="join_contain">
            <h1 className="text">회원가입</h1>
            <div className="input_contain">
                <input className="id" type="email" ref={email} placeholder="이메일을 입력해주세요." />
                <input className="pw" type="password" ref={pw1} placeholder='비밀번호는 최소 8자 이상 입력해주세요.'/>
                <input className="pw" type="password" ref={pw2} placeholder='다시 한 번 입력해주세요.' />
                <div className="btn_contain">
                    <button className="auth_btn auth" onClick={ () => {check()}}>유효성 검사</button>
                    <button className="auth_btn join"
                        style={ emailCheck_state && pwCheck_state ?
                            { cursor: "pointer" } : {cursor: "not-allowed"}}
                        
                        onClick={() => { join() } } disabled={ emailCheck_state && pwCheck_state ? false : true}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Join;