import { Route, Routes } from 'react-router-dom';
import Auth from '../pages/Auth';
import TodoList from '../component/todo/TodoList';
import UseLoginHook from '../utils/hooks/useLoginState';
import Page404 from '../pages/404';

const Router = () => {
    const MainLoginPage = UseLoginHook(TodoList);
    return (
        <Routes>
            <Route path="/" element={<MainLoginPage/>}/>
            <Route path="/auth" element={<Auth />} />
            <Route path="/:id" element={ <Page404/>} />
        </Routes>
    )
}

export default Router;