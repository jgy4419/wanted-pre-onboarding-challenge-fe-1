import axios from 'axios';

function deleteTodo(id: string) {
    const deleteItem = axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
        headers: {
            Authorization: 'login token'
        }
    });
    if (window.confirm('정말로 삭제하시겠습니까?') === true) {
        alert('삭제되었습니다!');
        deleteItem.then(res => {
            window.location.reload();
            return res;
        }).catch(err => {
            console.log(err);
        })   
    } else {
        return;
    }
}

export { deleteTodo };