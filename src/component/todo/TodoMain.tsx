import '../../styles/todo/TodoMain.scss';
import { Link } from 'react-router-dom';
import { blurTitle, blurContent } from '../../utils/constants';
import * as Main from '../../styles/styledComponnts/todo/styleTodoMain';

const TodoMain = () => {
    return (
        <Main.TodoContain>
            <div className="todo_inner">
                    <Main.BeforeLoginText>
                        <Main.TodoBlurText>Todo를 만들기 위해서는 로그인이 필요해요!</Main.TodoBlurText>
                        <Link to='/auth'>
                            <Main.TodoBlurButton>로그인 하러 가기</Main.TodoBlurButton>
                        </Link>
                        
                    </Main.BeforeLoginText>
            </div>
            <div className="todo_lists"
            style={{
                filter: "blur(4px)",
                pointerEvents: "none"
            }}>
                {/* 스타일 수정하기 */}
                {
                    blurTitle.map((item, index) => {
                        return (
                            <li key={index} className="todo_list">
                                <h2 className="title">{ item }</h2>
                                <p className="content">{ blurContent[index] }</p>
                            </li>
                        )
                    })
                }
            </div>
        </Main.TodoContain>
    );
};

export default TodoMain;