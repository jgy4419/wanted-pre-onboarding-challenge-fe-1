import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';
import TogoList from './component/todo/TodoList';
import UseLoginHook from './hook/login/useLoginState';

const Router = () => {
    const MainLoginPage = UseLoginHook(TogoList);
    return (
        <Routes>
            <Route path="/" element={<MainLoginPage/>}/>
            <Route path="/auth/signup" element={<SignUp/>}/>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default Router;