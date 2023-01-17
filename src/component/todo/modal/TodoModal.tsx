import CreateTodo from './CreateTodo';
import DetailTodo from './DetailTodo';
import { modalPropsType } from '../../../utils/types/todo/type';
import * as Modal from '../../../styles/styledComponents/todo/modal/styledTodoModal';

const TodoModal = ({ modalStateFunc, modalState, clickedTodo }: modalPropsType) => {
    return (
        <Modal.TodoModalsContain>
            <Modal.DarkBackColor />
            <Modal.TodoModalInner>
                <Modal.Close onClick={() => { modalStateFunc('close') }}>X</Modal.Close>
                {
                    modalState === 'create' && <CreateTodo modalStateFunc={ modalStateFunc } />
                }
                {
                    modalState === 'detail' && <DetailTodo clickedTodo={clickedTodo} modalStateFunc ={ modalStateFunc } />
                }
            </Modal.TodoModalInner>
        </Modal.TodoModalsContain>
    );
};

export default TodoModal;