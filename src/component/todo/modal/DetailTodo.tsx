import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { TodoType } from '../../../type/type';
import { modalTypeFunc } from '../../../type/type';
import { deleteTodo } from '../../../logic/api/delete';
import { updateTodo } from '../../../logic/api/put';
import '../../../styles/todo/DetailTodo.scss';

type defailTodo = {
    clickedTodo: string
}
const DetailTodo = ({ clickedTodo }: defailTodo) => {
    const [detailTodo, setDetailTodo] = useState<TodoType | undefined>();
    const [editState, setEditState] = useState<boolean>(false);
    const editTitle = useRef<HTMLInputElement>(null);
    const editContent = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const todoDetailData = axios.get(`${process.env.REACT_APP_API_URL}/todos/${clickedTodo}`, {
            headers: {
                Authorization: 'login token'
            }
        });

        todoDetailData.then(res => {
            console.log(res.data.data);
            
            setDetailTodo(res.data.data);
            console.log(detailTodo);
        });
        console.log(clickedTodo);
    }, [editState]);

    const todoEdit = (id: string, title?: string, content?: string) => {
        if(editState === false){
            setEditState(true);
        } else {
            if(title !== undefined && content !== undefined){
                let state = updateTodo(id, title, content);
                setEditState(false);
            }
        }
    }
    const deleteTodoItem = (id: string) => {
        deleteTodo(detailTodo!.id);
    }

    return (
        <div className="detail_todo_contain">
            <div className="inner">
                {
                    detailTodo !== undefined && 
                    <div className="todo_detail">
                        {
                            editState === true
                            ? 
                            <>
                                <label className="edit_title_label">제목</label>
                                <input 
                                    ref={editTitle}
                                    className="edit_title"
                                    placeholder={detailTodo.title}/>
                            </>
                            : <h2 className="todo_detail_title">{detailTodo.title}</h2>
                        }
                        {
                            editState === false ? <p className="todo_detail_date">{detailTodo.createdAt.substr(0, 10)}</p>
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
                                    placeholder={detailTodo.content}/>
                            </>
                            : <p className="todo_detail_content">{detailTodo.content}</p>
                        }
                    </div>
                }
                <div className="detail_buttons">
                    <button className="edit_button btn"
                    onClick={() => {todoEdit(detailTodo!.id, editTitle.current?.value, editContent.current?.value)}}>
                        {editState === false ? '수정' : '변경'}
                    </button>
                    <button className="delete_button btn" onClick={() => {deleteTodoItem(detailTodo!.id)}}>
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailTodo;