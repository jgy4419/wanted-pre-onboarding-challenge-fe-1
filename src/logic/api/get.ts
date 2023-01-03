import axios from 'axios';
// todo 리스트 가져오기
type TodoType = {
    content: string,
    createdAt: string,
    id: string,
    title: string,
    updateAt: string
}
function getTodoList(): TodoType | undefined{
    if(localStorage.getItem('token')){
        const getList = axios.get(`${process.env.REACT_APP_API_URL}/todos`, {
            headers: {
                Authorization: 'login token'
            }
        });
        getList.then(res => {
            console.log(res.data.data);
            return res;
        }).catch (err => {
            console.log(err);
        })
    }else {
        return;
    }
}

export { getTodoList };