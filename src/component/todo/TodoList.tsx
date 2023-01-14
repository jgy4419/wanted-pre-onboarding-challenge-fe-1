import { useState } from 'react';
import TodoModal from './modal/TodoModal';
import '../../styles/todo/TodoList.scss';
import { TodoType } from '../../utils/types/todo/type';

import { getTodoList } from '../../logic/api/todo/get';
import { useQuery } from 'react-query';
const TodoList = () => {
    const { data: todoData } = useQuery("getTodoList", getTodoList, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: data => {
            console.log(data);
        },
        onError: error => {
            alert(`게시글을 불러오는데 실패했습니다. 이유는 다음과 같습니다. ${error}`)
        }
    });
    
    const [modalState, setModalState] = useState('');
    const [clickedTodo, setClickedTodo] = useState('');

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
    
    return (
        <>
            <div className="todo_list_contain">
                <div className="todo_list_inner">
                    <ul className="todo_lists">
                        {
                            Array.isArray(todoData) && todoData.map((item: TodoType) => {
                                return (
                                    <li key={item.id} className="todo_list"
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