import { useEffect, useState } from 'react';

const useTokenCheck = () => {
    const [tokenState, setTokenState] = useState(false);
    
    useEffect(() => {
        localStorage.getItem('token')
            ? setTokenState(true)
            : setTokenState(false);
    }, []);
    return { tokenState };
};

export default useTokenCheck;
