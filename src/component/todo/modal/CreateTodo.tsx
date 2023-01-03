import React, { useRef } from 'react';
import { createPost } from '../../../logic/api/post';
import '../../../styles/todo/modal/CreateTodo.scss';

const CreateTodo = () => {
    const title = useRef<HTMLInputElement>(null);
    const content = useRef<HTMLTextAreaElement>(null);
    return (
        <div className="create_todo_modal_contain">
            <div className="todo_modal_inner">
                <h1 className="todo_title">TODO 생성</h1>
                <div className="create_todo_title">
                    <label className="create_todo_title_label">TODO 이름</label>
                    <input 
                        className="create_todo_title_input"
                        ref={title}
                        type="text" 
                        name="create_text"
                        placeholder="제목을 입력해주세요!"/>
                </div>
                <div className="create_todo_content">
                    <label className="create_todo_content_label">TODO 내용</label>
                    <textarea 
                        className="create_todo_content_input"
                        ref={content}
                        placeholder="TODO 내용을 입력해주세요!"
                    />
                </div>
            </div>
            <button className="create_todo_button" onClick={() => { createPost(title.current!.value, content.current!.value) } }>생성</button>
        </div>
    );
};

export default CreateTodo;