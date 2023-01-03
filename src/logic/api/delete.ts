import axios from 'axios';

function deleteTodo(id: string) {
    const deleteItem = axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
        headers: {
            Authorization: 'login token'
        }
    });
    deleteItem.then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}

export { deleteTodo };