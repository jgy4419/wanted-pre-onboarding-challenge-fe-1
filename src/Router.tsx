import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import TodoList from './component/todo/TodoList';
import UseLoginHook from './hook/login/useLoginState';

const Router = () => {
    const MainLoginPage = UseLoginHook(TodoList);
    return (
        <Routes>
            <Route path="/" element={<MainLoginPage/>}/>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default Router;