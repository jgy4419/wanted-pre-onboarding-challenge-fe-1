import styled from 'styled-components';

export const ChoiceContain = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`

export const ChoiceInner = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 20px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    height: 90%;
    @media (max-width: 900px) {
        flex-direction: column;
        margin-top: 20%;
    }
`

export const ChoiceDiv = styled.div`
    transition: .5s;
    width: 45%;
    height: 80%;
    border: 0;
    box-shadow: 4px 12px 30px 6px rgb(243, 239, 239);
    border-radius: 20px;
    &:nth-child(0){
        &:hover {
            background-color: rgb(236, 236, 201);
        }
    }
    &:nth-child(1){
        &:hover {
            background-color: rgb(246, 246, 230);
        }
    }
    @media (max-width: 900px) {
        width: 100%;
    }
`