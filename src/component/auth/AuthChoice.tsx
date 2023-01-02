import React, { useEffect } from 'react';
import Login from './Login';
import Join from './Join';
import '../../styles/component/auth/AuthChoice.scss';
// import axios from 'axios';

const AuthChoice = () => {
    // useEffect(() => {
    //     console.log('dld,,');
        
    //     axios.get('/api/test', {
    //         headers: {
    //             Authorization: "login token"    
    //         }
    //     })
    //         .then(res => {
    //             console.log(res);
    //         }).catch(err => {
    //             console.log(err);
    //     })
    // }, []);
    return (
        <>
            <div className="choice_contain">
                <div className="inner">
                    <div className="choice login">
                        <Login/>
                    </div>
                    <div className="choice join">
                        <Join/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthChoice;