import React from 'react';
import CreateTodo from './CreateTodo';
import DetailTodo from './DetailTodo';
import '../../../styles/todo/modal/TodoModal.scss';
import { modalStateType } from '../../../type/type';

type modalPropsType = modalStateType & {
    clickedTodo: string
}

const TodoModal = ({ modalStateFunc, modalState, clickedTodo }: modalPropsType) => {
    return (
        <div className="todo_modals_contain">
            <div className="dark_back_color" />
            <div className="todo_modal_inner">
                <p className="close" onClick={() => { modalStateFunc('close') }}>X</p>
                {
                    modalState === 'create' && <CreateTodo />
                }
                {
                    modalState === 'detail' && <DetailTodo clickedTodo={clickedTodo}/>
                }
            </div>
        </div>
    );
};

export default TodoModal;