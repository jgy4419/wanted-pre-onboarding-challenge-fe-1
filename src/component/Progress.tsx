import { useEffect, useState }  from 'react';

import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const useProgress = () => {
    const [progress, setProgress] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            setProgress(false);
        }, 1000);
        setProgress(true);
    }, [location]);
    return (
        <>
            { progress &&
               <Box sx={{ width: '100%' }}>
                    <LinearProgress color="inherit"/>
                </Box >
            }
        </>
    )
};

export default useProgress;