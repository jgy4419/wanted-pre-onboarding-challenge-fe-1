import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TodoModal from './modal/TodoModal';
import axios from 'axios';
import '../../styles/todo/TodoList.scss';
import { deleteTodo } from '../../logic/api/delete';
import { updateTodo } from '../../logic/api/put';
import { TodoType } from '../../type/type';


export type modalStateType = {
    modalStateFunc(): void
}

const TodoList = () => {
    const blurTitle = ['오늘 할 일 ~~', '오늘 할 일 ~~~', '오늘 할 일 ~!!~!', '오늘 할 일 !!~!!'];
    const blurContent = ['오늘은 ~~', '오늘은 ~~', '오늘은 ~~', '오늘은 ~~'];
    const [todoData, setTodoData] = useState<TodoType[]>([] as TodoType[]);
    const [modalState, setModalState] = useState<boolean>(false);
    const [editState, setEditState] = useState<boolean>(false);
    const editTitle = useRef<HTMLInputElement>(null);
    const editContent = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        // todo 리스트 가져오기
        axios.get(`${process.env.REACT_APP_API_URL}/todos`, {
            headers: {
                Authorization: 'login token'
            }
        }).then(res => {
            setTodoData(res.data.data);   
        })
    }, [todoData, editState]); 

    const modalStateFunc = (): void => {
        setModalState(!modalState);
    };

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

    return (
        <>
            <div className="todo_list_contain"
                style={
                    !localStorage.getItem('token')
                        ? {
                            filter: "blur(4px)",
                            pointerEvents: "none"
                        }
                        : {
                            filter: "blur(0px)",
                            pointerEvents: "auto"
                        }}>
                <div className="todo_list_inner">
                    {
                        todoData.length === 0 && localStorage.getItem('token') 
                        && <p className="none_todo_text">데이터가 없습니다!</p>
                    }
                    <ul className="todo_lists">
                        {
                            !localStorage.getItem('token') ?
                            blurTitle.map((item, index) => {
                                return (
                                    <li key={index} className="todo_list">
                                        <h2 className="title">{ item }</h2>
                                        <p className="content">{ blurContent[index] }</p>
                                    </li>
                                )
                            })
                            : todoData.map((item, index) => {
                                return (
                                    <Link to={`/${item.id}`} ><li key={index} className="todo_list">
                                        <div className="left">
                                            {
                                                editState === true
                                                ? 
                                                <>
                                                    <label>제목</label>
                                                    <input 
                                                        ref={editTitle}
                                                        className="edit_title"
                                                        placeholder={item.title}/>
                                                </>
                                                : <h2 className="title">{item.title}</h2>
                                            }
                                            {
                                                editState === true
                                                ? 
                                                <>
                                                    <br/>
                                                    <label>내용</label>
                                                    <textarea
                                                        ref={editContent}
                                                        className="edit_content"
                                                        placeholder={item.content}/>
                                                </>
                                                : <p className="content">{ item.content }</p>
                                            }
                                        </div>
                                    </li></Link>
                                )
                            })
                        }
                    </ul>
                    <button className="add_todo_button" onClick={ () => {modalStateFunc()}}>+</button>
                </div>
            </div>
            <div className="todo_modal">
                {
                    modalState && <TodoModal modalStateFunc={modalStateFunc}/>
                }
            </div>
        </>
    );
};

export default TodoList;