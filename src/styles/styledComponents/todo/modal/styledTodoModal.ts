import styled from 'styled-components';

export const TodoModalsContain = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
`

export const DarkBackColor = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
`

export const Close = styled.p`
    position: absolute;
    z-index: 10;
    right: 50px; top: 0px;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
`

export const TodoModalInner = styled.div`
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    margin: auto;
    width: 60%;
    height: 80%;
    background-color: #fff;
    border-radius: 20px;
    @media (max-width: 900px) {
        width: 80%;
    }
`