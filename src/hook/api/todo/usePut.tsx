import { useMutation } from 'react-query';
import axios from 'axios';
import { PostTodoType } from '../../../utils/types/todo/interface';

export function usePutItem(){
    const putTodoItem = useMutation('putTodoItem', async ({ id, title, content }: PostTodoType) => {
        if (title !== '' && content !== '') {
            axios.put(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
                title, content
            },{
                headers: {
                    Authorization: 'login Token'
                }
            })
        }
    })
    return putTodoItem;
}