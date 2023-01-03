import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';
import TodoDetail from './pages/TodoDetail';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/signup" element={<SignUp/>}/>
            <Route path="/auth" element={<Auth />} />
            <Route path="/:id" element={<TodoDetail/>}/>
        </Routes>
    )
}

export default Router;