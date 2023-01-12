import TodoList from './TodoList';
import '../../styles/todo/TodoMain.scss';
import { Link } from 'react-router-dom';

const TodoMain = () => {
    const blurTitle = [
        '오늘 할 일 ~~', '오늘 할 일 ~~~', '오늘 할 일 ~!!~!', '오늘 할 일 !!~!!',
        '오늘 할 일 !!~!!', '오늘 할 일 !!~!!', '오늘은~~!', 'TODOTOOD'
    ];
    const blurContent = [
        '오늘은 ~~', '오늘은 ~~', '오늘은 ~~', '오늘은 ~~',
        '오늘은 ~ 5, 오늘은 6', '오늘은!! 7', '오늘은 8!'
    ];
    return (
        <div className="todo_contain">
            <div className="todo_inner">
                    <div className="before_login_text">
                        <h2 className="todo_blur_text">Todo를 만들기 위해서는 로그인이 필요해요!</h2>
                        <Link to='/auth'>
                            <button className="todo_blur_button">로그인 하러 가기</button>
                        </Link>
                        
                    </div>
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
        </div>
    );
};

export default TodoMain;