import React from 'react';
import Login from './Login';
import Join from './Join';
import '../../styles/auth/AuthChoice.scss';

const AuthChoice = () => {
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