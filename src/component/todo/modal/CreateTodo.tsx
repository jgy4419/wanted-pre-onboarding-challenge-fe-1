import { useRef } from 'react';
import { useCreateTodo } from '../../../hook/api/todo/usePost';
import '../../../styles/todo/modal/CreateTodo.scss';
import { modalStateFuncType } from '../../../utils/types/todo/interface';

const CreateTodo = ({ modalStateFunc }: modalStateFuncType) => {
    const title = useRef<HTMLInputElement>(null);
    const content = useRef<HTMLTextAreaElement>(null);

    const createPost = useCreateTodo();

    const createPostHandler = () => {
        createPost.mutate({ title: title.current!.value, content: content.current!.value })
        alert('게시글이 생성되었습니다!');
        modalStateFunc('clise');
    }
    return (
        <div className="create_todo_modal_contain">
            <div className="todo_modal_inner">
                <h1 className="todo_title">TODO 생성</h1>
                <div className="create_todo_title">
                    <label className="create_todo_title_label">TODO 제목</label>
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
            <button className="create_todo_button" onClick={() => { createPostHandler() } }>생성</button>            
        </div>
    );
};

export default CreateTodo;