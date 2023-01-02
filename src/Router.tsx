import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/signup" element={<SignUp/>}/>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default Router;