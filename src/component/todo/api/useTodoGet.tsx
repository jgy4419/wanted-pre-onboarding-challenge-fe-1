import { useQuery } from 'react-query';
import api from '../../../utils/hooks/useApi';

export function useGetTodo() {
    const { data: todoData } = useQuery('todos', async () => {
        if (localStorage.getItem('token')) {
            try {
                const { data } = await api.get(`${process.env.REACT_APP_API_URL}/todos`)
                return data.data;
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
            const { data } = await api.get(`${process.env.REACT_APP_API_URL}/todos/${id}`)
            return data.data;;
        } catch (err) {
            console.log(err);
        }
    })
    return todoDetailData;
}