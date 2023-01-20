import styled from 'styled-components';
import { button, edit } from '../../overlapStyle';

export const EditTodoContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #fff;
`

export const EditInner = styled.div`
    border-radius: 20px;
    position: absolute;
    width: 80%;
    left: 0; right: 0; top: 10%; bottom: 0;
    margin: auto;
    @media (max-width: 900px) {
        width: 80%;
    }
`

export const EditTitleLable = styled.label`
    font-size: 30px;
    font-weight: 700;
`

export const EditContentContain = styled.div`
    margin-top: 30px;
`

export const EditContentLable = styled.label`
    font-size: 25px;
    font-weight: 700;
    @media (max-width: 900px) {
        font-size: 20px;
    }
`

export const EditContentInput = styled.textarea`
    ${edit}
    height: 300px;
    margin: 30px 80px;;
`

export const EditTitle = styled.input`
    ${edit}
    height: 50px;
    margin-top: 30px;
    @media (max-width: 900px) {
        font-size: 20px;
    }
`

export const EditContent = styled.p`
    width: 80%;
    height: 250px;
    padding: 10px;
    background-color: rgb(242, 239, 239);
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 2px 3px 3px 2px rgb(243, 239, 239);
    border: 0;
    font-weight: 600;
`

export const EditButton = styled.button`
    ${button};
    position: absolute;
    right: 0;
    width: 100px;
    background-color: rgb(214, 212, 212);
    color: #333;
`