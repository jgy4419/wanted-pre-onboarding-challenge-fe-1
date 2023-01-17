import { useMutation } from 'react-query';
import axios from 'axios';
import { authPostType } from '../../../utils/types/auth/interface';

export function useAuthPost() {
    const authPost = useMutation('authPost', async ({email, password}: authPostType) => {
        axios.post(`${process.env.REACT_APP_API_URL}/users/create`, {
            email,
            password
        })
    })
    return authPost
}

export function useLoginAuth() {
    const loginAuth = useMutation('loginAuth', async ({ email, password }: authPostType) => {
        if (localStorage.getItem('token')) {
            alert('이미 로그인이 되어있습니다!');
            window.location.href = "/"
        }
        axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
            email,
            password
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            window.location.href = "/";
        }).catch(() => {
            alert('아이디 또는 비밀번호가 잘못 되었습니다.');
        })
    })
    return loginAuth;
}