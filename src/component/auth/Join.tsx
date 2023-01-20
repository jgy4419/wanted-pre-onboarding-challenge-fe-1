import { useRef, useState } from 'react';
import { useAuthPost } from '../../hook/api/auth/useAuthPost';
import * as JoinStyle from '../../styles/styledComponents/auth/styledJoin';
import { authCheck } from '../../lib/auth/authCheck';

const Join = () => {
    // 변수명.. 잘 만들자..
    const [authState, setAuthState] = useState(false);
    const email = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmedRef = useRef<HTMLInputElement>(null);
    const authPost = useAuthPost();

    const check = () => {
        let authCheckRes = authCheck({
            email: email.current!.value,
            password: passwordRef.current!.value,
            passwordConfirmed: passwordConfirmedRef.current!.value
        });
        setAuthState(authCheckRes);
        return authCheckRes;
    }
    function joinHandler() {
        if (!check()) return     
        authPost.mutate({email: email.current!.value, password: passwordRef.current!.value})
    }

    return (
        <JoinStyle.JoinContain>
            <JoinStyle.Text>회원가입</JoinStyle.Text>
            <JoinStyle.InputContain>
                <JoinStyle.AuthInput type="email" ref={email} placeholder="이메일을 입력해주세요." />
                <JoinStyle.AuthInput type="password" ref={passwordRef} placeholder='비밀번호는 최소 8자 이상 입력해주세요.'/>
                <JoinStyle.AuthInput type="password" ref={passwordConfirmedRef} placeholder='다시 한 번 입력해주세요.' />
                <JoinStyle.BtnContain>
                    <JoinStyle.AuthButton onClick={ () => {check() && alert('유효성 검사가 완료되었습니다.') }}>유효성 검사</JoinStyle.AuthButton>
                    <JoinStyle.JoinButton
                        style={
                            authState ? { cursor: "pointer" } :
                                {
                                    cursor: "not-allowed",
                                    backgroundColor: 'lightGrey'
                                }
                        }
                        onClick={() => { joinHandler() } } disabled={ authState ? false : true}>회원가입</JoinStyle.JoinButton>
                </JoinStyle.BtnContain>
            </JoinStyle.InputContain>
        </JoinStyle.JoinContain>
    );
};

export default Join;