import styled from 'styled-components';

export const TodoListContain = styled.div`
    position: relative;
    margin: auto;
    margin-top: 30px;
    width: 100%;
    height: 90vh;   
`

export const TodoListInner = styled.div`
    text-align: center;
`

export const AddTodoButton = styled.button`
    position: absolute;
    bottom: 10%;
    right: 10%;
    margin: auto;
    color: #333;
    font-size: 25px;
    font-weight: 700;
    width: 45px;
    height: 45px;
    border: 0;
    border-radius: 50%;
    transition: .3s;
    cursor: pointer;
    background-color: rgb(236, 236, 201);
    &:hover{
        background-color: rgb(200, 200, 162);
    }
`

export const TodoModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`