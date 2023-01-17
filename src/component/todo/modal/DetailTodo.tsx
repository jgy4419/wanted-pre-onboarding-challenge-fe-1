import { useState, useRef } from 'react';
import { useDeleteItem } from '../../../hook/api/todo/useTodoDelete';
import { usePutItem } from '../../../hook/api/todo/useTodoPut';
import { useTodoDetail } from '../../../hook/api/todo/useTodoGet';
import { modalPropsType } from '../../../utils/types/todo/type';
import '../../../styles/todo/modal/DetailTodo.scss';

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
                alert('변경되었습니다.');
                return;
            }
        }
    }

    return (
        <div className="detail_todo_contain">
            <div className="inner">
                {
                    todoClickedData !== undefined && 
                    <div className="todo_detail">
                        {
                            editState === true
                            ? 
                            <>
                                <label className="edit_title_label">제목</label>
                                <input 
                                    ref={editTitle}
                                    className="edit_title"
                                    placeholder={todoClickedData.title}/>
                            </>
                            : <h2 className="todo_detail_title">{todoClickedData.title}</h2>
                        }
                        {
                            editState === false ? <p className="todo_detail_date">{todoClickedData.createdAt.substr(0, 10)}</p>
                            : null
                        }
                        {
                            editState === true
                            ? 
                            <>
                                <br/>
                                <p className="edit_content_label">내용</p>
                                <textarea
                                    ref={editContent}
                                    className="edit_content"
                                    placeholder={todoClickedData.content}/>
                            </>
                            : <p className="todo_detail_content">{todoClickedData.content}</p>
                        }
                    </div>
                }
                <div className="detail_buttons">
                    <button className="edit_button btn"
                    onClick={() => {putTodoItem()}}>
                        {editState === false ? '수정' : '변경'}
                    </button>
                    <button className="delete_button btn" onClick={() => { deleteTodoItem()}}>
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailTodo;