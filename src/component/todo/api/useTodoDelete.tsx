import { useMutation } from 'react-query';
import api from '../../../utils/hooks/useApi';

export function useDeleteItem(id: string){
    const deleteTodoItem = useMutation ('deleteItem', async () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            api.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`)
        } else {
            alert('삭제되지 않았습니다.');
            return;
        }      
    })
    return deleteTodoItem;
}
