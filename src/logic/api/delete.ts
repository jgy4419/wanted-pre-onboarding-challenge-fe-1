import axios from 'axios';

function deleteTodo(id: string) {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
        alert('삭제되었습니다!');
        const deleteItem = axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
            headers: {
                Authorization: 'login token'
            }
        });
        deleteItem.then(res => {
            window.location.reload();
            return res;
        }).catch(err => {
            console.log(err);
        })   
    } else {
        alert('삭제되지 않았습니다!')
        return;
    }
}

export { deleteTodo };