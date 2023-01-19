import React from 'react';
import Login from './Login';
import Join from './Join';
import * as Auth from '../../styles/styledComponents/auth/styledAuthChoice';

const AuthChoice = () => {
    return (
        <>
            <Auth.ChoiceContain>
                <Auth.ChoiceInner>
                    <Auth.ChoiceDiv>
                        <Login/>
                    </Auth.ChoiceDiv>
                    <Auth.ChoiceDiv>
                        <Join/>
                    </Auth.ChoiceDiv>
                </Auth.ChoiceInner>
            </Auth.ChoiceContain>
        </>
    );
};

export default AuthChoice;