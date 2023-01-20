import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { IAuthPostType } from '../../../utils/types/auth/interface';
import api from '../../../lib/common/api';

export function useAuthPost() {
    const navigate = useNavigate();
    const authPost = useMutation('authPost', async ({email, password}: IAuthPostType) => {
        api.post(`${process.env.REACT_APP_API_URL}/users/create`, {
            email,
            password
        })
    }, {
        onSuccess: () => {
            alert('회원가입이 완료되었습니다!');
            navigate('/');
        }
    })
    return authPost
}

export function useLoginAuth() {
    const loginAuth = useMutation('loginAuth', async ({ email, password }: IAuthPostType) => {
        if (localStorage.getItem('token')) {
            alert('이미 로그인이 되어있습니다!');
            window.location.href = "/"
        }
        const token = api.post(`${process.env.REACT_APP_API_URL}/users/login`, {
            email,
            password
        })
        return token;
    }, {
        onSuccess: res => {
            localStorage.setItem('token', res.data.token)
            window.location.href = "/";
        },
        onError: () => {
            alert('아이디 또는 비밀번호가 잘못 되었습니다.');  
        }

    })
    return loginAuth;
}