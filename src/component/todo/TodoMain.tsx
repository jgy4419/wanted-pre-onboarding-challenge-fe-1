import React from 'react';
import TodoList from './TodoList';
import '../../styles/todo/TodoMain.scss';
import { Link } from 'react-router-dom';

const TodoMain = () => {
    return (
        <div className="todo_contain">
            <div className="todo_inner">
                {
                    !localStorage.getItem('token') &&
                    <div className="before_login_text">
                        <h2 className="todo_blur_text">Todo를 만들기 위해서는 로그인이 필요해요!</h2>
                        <Link to='/auth'>
                            <button className="todo_blur_button">로그인 하러 가기</button>
                        </Link>
                    </div>
                }
            </div>
            <TodoList/>
        </div>
    );
};

export default TodoMain;