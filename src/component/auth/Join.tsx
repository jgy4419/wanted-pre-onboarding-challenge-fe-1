import { useRef, useState } from 'react';
import { emailCheck, passwordCheck } from '../../logic/signUp';
import { useAuthPost } from '../../hook/api/auth/useAuthPost';
import '../../styles/auth/Join.scss';

const Join = () => {
    // 변수명.. 잘 만들자..
    const [authState, setAuthState] = useState(false);
    const email = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmedRef = useRef<HTMLInputElement>(null);
    const authPost = useAuthPost();

    const check = (): boolean => {
        if(emailCheck(email.current!.value) && passwordCheck(passwordRef.current!.value, passwordConfirmedRef.current!.value)){
            setAuthState(true)
            return true;
        }else {
            return false;
        }
    }
    function joinHandler() {
        if (!check()) return     
        authPost.mutate({email: email.current!.value, password: passwordRef.current!.value})
    }

    return (
        <div className="join_contain">
            <h1 className="text">회원가입</h1>
            <div className="input_contain">
                <input className="id" type="email" ref={email} placeholder="이메일을 입력해주세요." />
                <input className="pw" type="password" ref={passwordRef} placeholder='비밀번호는 최소 8자 이상 입력해주세요.'/>
                <input className="pw" type="password" ref={passwordConfirmedRef} placeholder='다시 한 번 입력해주세요.' />
                <div className="btn_contain">
                    <button className="auth_btn auth" onClick={ () => {check() && alert('유효성 검사가 완료되었습니다.') }}>유효성 검사</button>
                    <button className="auth_btn join"
                        style={
                            authState ? { cursor: "pointer" } :
                                {
                                    cursor: "not-allowed",
                                    backgroundColor: 'lightGrey'
                                }
                        }
                        onClick={() => { joinHandler() } } disabled={ authState ? false : true}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Join;