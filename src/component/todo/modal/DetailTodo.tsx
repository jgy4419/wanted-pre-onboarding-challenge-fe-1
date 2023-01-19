import { useState, useRef } from 'react';
import { useDeleteItem } from '../../../hook/api/todo/useTodoDelete';
import { usePutItem } from '../../../hook/api/todo/useTodoPut';
import { useTodoDetail } from '../../../hook/api/todo/useTodoGet';
import { modalPropsType } from '../../../utils/types/todo/type';
import * as Detail from '../../../styles/styledComponents/todo/modal/styledDetailTodo';

const DetailTodo = ({ clickedTodo, modalStateFunc }: modalPropsType) => {
    const [editState, setEditState] = useState<boolean>(false);
    const editTitle = useRef<HTMLInputElement>(null);
    const editContent = useRef<HTMLTextAreaElement>(null);
    const todoClickedData = useTodoDetail(clickedTodo);
    const todoDelete = useDeleteItem(clickedTodo);
    const todoPut = usePutItem();

    const deleteTodoItem = () => {
        todoDelete.mutate();
        modalStateFunc('close');
    }
    const putTodoItem = () => {
        if(editState === false){
            setEditState(true);
        } else {
            if(editTitle !== undefined && editContent !== undefined){
                todoPut.mutate({ id: todoClickedData!.id, title: editTitle.current!.value, content: editContent.current!.value });
                setEditState(false);
                return;
            }
        }
    }

    return (
        <Detail.DetailTodoContain>
            <Detail.DetailInner>
                {
                    todoClickedData !== undefined && 
                    <Detail.TodoDetail>
                        {
                            editState === true
                            ? 
                            <>
                                <Detail.EditTitleLable>제목</Detail.EditTitleLable>
                                <Detail.EditTitle 
                                    ref={editTitle}
                                    className="edit_title"
                                    placeholder={todoClickedData.title}/>
                            </>
                            : <Detail.TodoDetailTitle>{todoClickedData.title}</Detail.TodoDetailTitle>
                        }
                        {
                            editState === false ? <Detail.TodoDetailDate>{todoClickedData.createdAt.substr(0, 10)}</Detail.TodoDetailDate>
                            : null
                        }
                        {
                            editState === true
                            ? 
                            <>
                                <br />
                                <Detail.EditContentContain>
                                <Detail.EditContentLable>내용</Detail.EditContentLable>
                                    <Detail.EditContentInput
                                        ref={editContent}
                                        placeholder={todoClickedData.content}/>
                                </Detail.EditContentContain>
                            </>
                            : <Detail.TodoDetailContent>{todoClickedData.content}</Detail.TodoDetailContent>
                        }
                    </Detail.TodoDetail>
                }
                <Detail.DetailButtons>
                    <Detail.EditButton    
                    onClick={() => {putTodoItem()}}>
                        {editState === false ? '수정' : '변경'}
                    </Detail.EditButton>
                    <Detail.DeleteButton onClick={() => { deleteTodoItem()}}>
                        삭제
                    </Detail.DeleteButton>
                </Detail.DetailButtons>
            </Detail.DetailInner>
        </Detail.DetailTodoContain>
    );
};

export default DetailTodo;