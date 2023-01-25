import { useState } from 'react';
import TodoModal from './modal/TodoModal';
import { TodoType } from '../../utils/types/todo/type';
import { useGetTodo } from './api/useTodoGet';
import * as List from '../../styles/styledComponents/todo/styledTodoList';

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
            <List.TodoListContain>
                <List.TodoListInner>
                    <ul className="todo_lists">
                        {
                            Array.isArray(getTodo) && getTodo.length > 0 ? getTodo.map((item: TodoType) => {
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
                                : <List.NotTodo>투두가 없습니다..</List.NotTodo>
                        }
                    </ul>
                    <List.AddTodoButton onClick={ () => {modalStateFunc('create')}}>+</List.AddTodoButton>
                </List.TodoListInner>
            </List.TodoListContain>
            <List.TodoModal>
                {
                    modalState === 'create' || modalState === 'detail' ? <TodoModal {...props} clickedTodo={ clickedTodo } />
                    : null
                }
            </List.TodoModal>
        </>
    );
};

export default TodoList;