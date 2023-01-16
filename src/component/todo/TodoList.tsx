import { useState } from 'react';
import TodoModal from './modal/TodoModal';
import '../../styles/todo/TodoList.scss';
import { TodoType } from '../../utils/types/todo/type';
import { useGetTodo } from '../../hook/api/todo/useGet';
const TodoList = () => {
    const getTodo = useGetTodo();

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
                            Array.isArray(getTodo) && getTodo.map((item: TodoType) => {
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