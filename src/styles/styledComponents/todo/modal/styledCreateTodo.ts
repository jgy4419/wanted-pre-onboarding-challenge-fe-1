import styled from 'styled-components';

export const CreateTodoModalContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const TodoModalInner = styled.div`
    position: absolute;
    left: 0; right: 0;
    width: 80%;
    height: 100%;
    margin: auto;
`

export const TodoTitle = styled.h1`
    text-align: center;
    color: #333;
`

export const CreateTodoInfo = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 70px;
`

export const CreateTodoLabel = styled.label`
    font-size: 20px;
    font-weight: 700;
    color: #333;
`

export const CreateTodoInput = styled.input`
    width: 50%;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 0;
    font-weight: 600;
    box-shadow: 2px 3px 3px 2px rgb(243, 239, 239);
`
export const CreateTodoTextArea = styled.textarea`
    width: 50%;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 0;
    font-weight: 600;
    box-shadow: 2px 3px 3px 2px rgb(243, 239, 239);
`

export const CreateTodoContentInput = styled.input`
    height: 80px;
`

export const CreateTodoButton = styled.button`
    position: absolute;
    left: 0; right: 0; bottom: 30px;
    margin: auto;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    border: 0;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
`