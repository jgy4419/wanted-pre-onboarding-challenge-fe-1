import { useRef } from 'react';
import { modalStateFuncType } from '../../../utils/types/todo/interface';
import { useCreateTodo } from '../../../hook/api/todo/useTodoPost';
import * as Create from '../../../styles/styledComponents/todo/modal/styledCreateTodo';

const CreateTodo = ({ modalStateFunc }: modalStateFuncType) => {
    const title = useRef<HTMLInputElement>(null);
    const content = useRef<HTMLTextAreaElement>(null);

    const createPost = useCreateTodo();

    const createPostHandler = () => {
        createPost.mutate({ title: title.current!.value, content: content.current!.value })
        alert('게시글이 생성되었습니다!');
        modalStateFunc('close');
    }
    return (
        <Create.CreateTodoModalContain>
            <Create.TodoModalInner>
                <Create.TodoTitle>TODO 생성</Create.TodoTitle>
                <Create.CreateTodoInfo>
                    <Create.CreateTodoLabel>TODO 제목</Create.CreateTodoLabel>
                    <Create.CreateTodoInput
                        ref={title}
                        type="text" 
                        name="create_text"
                        placeholder="제목을 입력해주세요!"/>
                </Create.CreateTodoInfo>
                <Create.CreateTodoInfo>
                    <Create.CreateTodoLabel>TODO 내용</Create.CreateTodoLabel>
                    <Create.CreateTodoTextArea
                        ref={content}
                        placeholder="TODO 내용을 입력해주세요!"
                    />
                </Create.CreateTodoInfo>
            </Create.TodoModalInner>
            <Create.CreateTodoButton onClick={() => { createPostHandler() } }>생성</Create.CreateTodoButton>            
        </Create.CreateTodoModalContain>
    );
};

export default CreateTodo;