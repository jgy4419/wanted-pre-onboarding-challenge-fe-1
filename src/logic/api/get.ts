import axios from 'axios';
// todo 리스트 가져오기
async function getTodoList(){
    if (localStorage.getItem('token')) {
        try {
            let todoListRes = await axios.get(`${process.env.REACT_APP_API_URL}/todos`, {
                headers: {
                    Authorization: 'login token'
                }
            });
            return todoListRes.data.data
        } catch (err){
            console.log(err);
        }
    }else {
        return;
    }
}

async function todoDetailData(id: string) {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
            headers: {
                Authorization: 'login token'
            }
        });
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}

export { getTodoList, todoDetailData };