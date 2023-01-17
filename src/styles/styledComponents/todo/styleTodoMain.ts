import styled from 'styled-components';

export const TodoContain = styled.div`
    position: relative;
    width: 100vw;
    height: 90vh;
`;

export const BeforeLoginText = styled.div`
    z-index: 10;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    margin-top: 15%;
`;

export const TodoBlurText = styled.h2`
    font-size: 30px;
    color: #333;
`

export const TodoBlurButton = styled.button`
    cursor: pointer;
    width: 150px;
    height: 60px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 700;
    background-color: #EAE7B1;
    color: #333;
    transition: .3s;
    border: 0;
    border-radius: 10px;
    &:hover{
        background-color: #A6BB8D;
        color: #fff;
    }
`