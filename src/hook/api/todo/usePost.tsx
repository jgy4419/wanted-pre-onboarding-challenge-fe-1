import { useMutation } from 'react-query';
import axios from 'axios';
import { PostTodoType } from '../../../utils/types/todo/interface';

export function useCreateTodo()  {
    const createTodo = useMutation('createTodo', async ({ title, content }: PostTodoType) => {
        axios.post(`${process.env.REACT_APP_API_URL}/todos`, {
            title,
            content
        }, {
            headers: {
                Authorization: 'login token'
            }
        })
    });
    return createTodo;
}