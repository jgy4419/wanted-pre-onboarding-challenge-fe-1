import axios from 'axios';
function createUser(email: string, password: string): void {
    // 회원가입 요청
    let join = axios.post('http://localhost:8080/users/create', {
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
    let login = axios.post('http://localhost:8080/users/login', {
        email,
        password
    });
    login.then(res => {
        localStorage.setItem('token', res.data.token)
        window.location.href = "/";
    }).catch(err => {
        console.log(err);
    })
}

export { createUser, loginAuth }