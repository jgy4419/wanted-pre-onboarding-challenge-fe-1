import axios from 'axios';

function updateTodo(id: string, title: string, content: string) {
    console.log(id, title, content);
    if(title !== '' && content !== ''){
        let update = axios.put(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
            title, content
        },{
            headers: {
                Authorization: 'login Token'
            }
        });
        update.then(() => {
            alert('변경되었습니다.')
            return;
        }).catch(err => {
            console.log(err);
        })
    }else {
        alert('제목이나 내용이 비어있습니다.');
        return;
    }
}

export { updateTodo };