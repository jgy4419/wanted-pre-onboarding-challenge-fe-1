import { ComponentType } from 'react';
import Home from '../../pages/Home';
import useTokenCheck from './useTokenCheck';

const useLoginState = (LoggingComponent: ComponentType) => {
    const { tokenState } = useTokenCheck();
    function loginFunc() {
        if(tokenState){
            return <LoggingComponent/>
        } else {
            return <Home/>
        }
    }
    return loginFunc;
};

export default useLoginState;