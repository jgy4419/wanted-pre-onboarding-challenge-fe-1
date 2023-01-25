import { useMutation } from 'react-query';
import { PostTodoType } from '../../../utils/types/todo/interface';
import api from '../../../utils/hooks/useApi';

export function usePutItem(){
    const putTodoItem = useMutation('putTodoItem', async ({ id, title, content }: PostTodoType) => {
        if (title !== '' && content !== '') {
            api.put(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
                title, content
            })
        }
    }, {
        onSuccess: () => {
            alert('변경되었습니다.');
        }
    })
    return putTodoItem;
}