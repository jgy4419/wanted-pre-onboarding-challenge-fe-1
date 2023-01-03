import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
import '../../../styles/todo/modal/TodoModal.scss';
import { modalStateType } from '../TodoList';

const TodoModal = ({ modalStateFunc }: modalStateType) => {
    return (
        <div className="todo_modals_contain">
            <div className="dark_back_color"/>
            <div className="todo_modal_inner">
                <p className="close" onClick={ modalStateFunc }>X</p>
                <CreateTodo />
            </div>
        </div>
    );
};

export default TodoModal;