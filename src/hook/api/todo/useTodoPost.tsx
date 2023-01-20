import { useMutation } from 'react-query';
import { PostTodoType } from '../../../utils/types/todo/interface';
import api from '../../../lib/common/api';

export function useCreateTodo()  {
    const createTodo = useMutation('createTodo', async ({ title, content }: PostTodoType) => {
        api.post(`${process.env.REACT_APP_API_URL}/todos`, {
            title,
            content
        });
    }, {
        onSuccess: () => {
            alert('게시글이 생성되었습니다!');
        }
    });
    return createTodo;
}