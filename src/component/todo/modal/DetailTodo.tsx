import { useState } from 'react';
import { useDeleteItem } from '../../../hook/api/todo/useTodoDelete';
import { useTodoDetail } from '../../../hook/api/todo/useTodoGet';
import { modalPropsType } from '../../../utils/types/todo/type';
import * as Detail from '../../../styles/styledComponents/todo/modal/styledDetailTodo';
import EditTodo from './EditTodo';

const DetailTodo = ({ clickedTodo, modalStateFunc }: modalPropsType) => {
    const [editState, setEditState] = useState<boolean>(false);
    const todoClickedData = useTodoDetail(clickedTodo);
    const todoDelete = useDeleteItem(clickedTodo);

    const deleteTodoItem = () => {
        todoDelete.mutate();
        modalStateFunc('close');
    }

    const editStateFunc = () => {
        setEditState(!editState);
    }

    return (
        <Detail.DetailTodoContain>
            <Detail.DetailInner>
            {
                todoClickedData !== undefined && editState === false ?
                <>
                    <Detail.TodoDetail>
                        <Detail.TodoDetailTitle>{todoClickedData.title}</Detail.TodoDetailTitle>

                        <Detail.TodoDetailDate>{todoClickedData.createdAt.substr(0, 10)}</Detail.TodoDetailDate>
                        <Detail.TodoDetailContent>{todoClickedData.content}</Detail.TodoDetailContent>
                    </Detail.TodoDetail>
                    <Detail.DetailButtons>
                        <Detail.EditButton onClick={() => {editStateFunc()}}>
                            수정
                        </Detail.EditButton>
                        <Detail.DeleteButton onClick={() => { deleteTodoItem()}}>
                            삭제
                        </Detail.DeleteButton>
                    </Detail.DetailButtons>
                </>
                : <EditTodo todoClickedData={todoClickedData} editStateFunc={ editStateFunc }  />
            }
            </Detail.DetailInner>
        </Detail.DetailTodoContain>
    );
};

export default DetailTodo;