import { useRef } from 'react';
import * as Edit from '../../../styles/styledComponents/todo/modal/styledEditTodo';
import { usePutItem } from '../../../hook/api/todo/useTodoPut';
import { IEditProps } from '../../../utils/types/todo/interface';

const EditTodo = ({ todoClickedData, editStateFunc }: IEditProps) => {
    
    const editTitle = useRef<HTMLInputElement>(null);
    const editContent = useRef<HTMLTextAreaElement>(null);
    const todoPut = usePutItem();    
    const putTodoItem = () => {
        editStateFunc();
        if(editTitle !== undefined && editContent !== undefined){
            todoPut.mutate({ id: todoClickedData!.id, title: editTitle.current!.value, content: editContent.current!.value });
            return;
        }
    }
    return (
        <>
            <Edit.EditTodoContain>
                <Edit.EditInner>
                    <Edit.EditTitleLable>제목</Edit.EditTitleLable>
                    <Edit.EditTitle 
                    ref={editTitle}
                        placeholder={todoClickedData && todoClickedData.title} />
                    <Edit.EditContentContain>
                        <Edit.EditContentLable>내용</Edit.EditContentLable>
                        <br/>
                        <Edit.EditContentInput
                            ref={editContent}
                            placeholder={ todoClickedData && todoClickedData.content}/>
                    </Edit.EditContentContain>
                    <Edit.EditButton onClick={() => {putTodoItem()}}>
                        수정완료
                    </Edit.EditButton>
                </Edit.EditInner>
            </Edit.EditTodoContain>
        </>
    );
};

export default EditTodo;