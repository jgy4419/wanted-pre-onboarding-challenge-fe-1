import axios from 'axios';
function createUser(email: string, password: string): void {
    // 회원가입 요청
    const join = axios.post(`${process.env.REACT_APP_API_URL}/users/create`, {
        email,
        password
    });

    join.then(res => {
        alert(res.data.message);
    }).catch(err => {
        console.log(err);
        
    })
}

function loginAuth(email: string, password: string): void {
    if (localStorage.getItem('token')) {
        alert('이미 로그인이 되어있습니다!');
        window.location.href = "/"
    }
    // 로그인 요청
    const login = axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
        email,
        password
    });
    login.then(res => {
        localStorage.setItem('token', res.data.token)
        window.location.href = "/";
    }).catch(() => {
        alert('아이디 또는 비밀번호가 잘못 되었습니다.');
    })
}

// 글 생성
function createPost(title: string, content: string) {
    console.log(process.env);
    
    const createPost = axios.post(`${process.env.REACT_APP_API_URL}/todos`, {
        title,
        content
    }, {
        headers: {
        Authorization: 'login token'
    }
    })
    
    createPost.then(res => {
        alert('게시글이 생성되었습니다!');
        window.location.reload();
    }).catch(err => {
        console.log(err);
    })
}

export { createUser, loginAuth, createPost }