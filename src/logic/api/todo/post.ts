import axios from 'axios';

// 글 생성
function createPost(title: string, content: string) {
    const createPost = axios.post(`${process.env.REACT_APP_API_URL}/todos`, {
        title,
        content
    }, {
        headers: {
        Authorization: 'login token'
    }
    })
    
    createPost.then(() => {
        alert('게시글이 생성되었습니다!');
        window.location.reload();
    }).catch(err => {
        console.log(err);
    })
}

export { createPost }