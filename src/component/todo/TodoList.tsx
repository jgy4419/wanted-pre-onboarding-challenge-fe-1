import React, { useState, useEffect } from 'react';
import TodoModal from './modal/TodoModal';
import '../../styles/todo/TodoList.scss';
import { TodoType } from '../../type/type';
import useTokenCheck from '../../hook/login/useTokenCheck';

import { getTodoList } from '../../logic/api/get';
const TodoList = () => {
    const { tokenState } = useTokenCheck();

    const [todoData, setTodoData] = useState<TodoType[]>([] as TodoType[]);
    const [modalState, setModalState] = useState<string>('');
    const [clickedTodo, setClickedTodo] = useState<string>('');

    const modalStateFunc = (type: string): void => {
        setModalState(type);
    };

    function modalData (id: string): void{
        setClickedTodo(id);
        modalStateFunc('detail');
    }

    const props = {
        modalState,
        modalStateFunc
    }

    useEffect(() => {
        // todo 리스트 가져오기
        (async () => {
            let todoListData = await getTodoList();
            setTodoData(todoListData);
        })();
        // modal이 변경되면 리스트 재렌더링 없이 다시 출력하기
    }, [modalState]); 

    return (
        <>
            <div className="todo_list_contain">
                <div className="todo_list_inner">
                    {
                        todoData.length === 0 && tokenState
                            ? <p className="none_todo_text">데이터가 없습니다!</p>
                            : null
                    }
                    <ul className="todo_lists">
                        {
                            todoData.map((item, index) => {
                                return (
                                    <li key={index} className="todo_list"
                                        onClick={() => { modalData(item.id) }}>
                                        <div className="content">
                                            <h2 className="title">{item.title}</h2>
                                            <p className="date">{item.createdAt.substr(0, 10)}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className="add_todo_button" onClick={ () => {modalStateFunc('create')}}>+</button>
                </div>
            </div>
            <div className="todo_modal">
                {
                    modalState === 'create' || modalState === 'detail' ? <TodoModal {...props} clickedTodo={ clickedTodo } />
                    : null
                }
            </div>
        </>
    );
};

export default TodoList;