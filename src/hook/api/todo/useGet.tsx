import { useQuery } from 'react-query';
import axios from 'axios';

export function useGetTodo() {
    const { data: todoData } = useQuery('todos', async () => {
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
    });
    return todoData;
}

export function useTodoDetail(id: string) {
    const { data: todoDetailData } = useQuery('todoDatail', async () => {
        try {
            const getTodoList = await axios.get(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
                headers: {
                    Authorization: 'login token'
                }
            });
            return getTodoList.data.data;
            } catch (err) {
                console.log(err);
            }
    }, {
        onSuccess: data => {
            console.log(data);
        },
        }
    )
    return todoDetailData;
}