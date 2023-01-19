import styled from 'styled-components';
import { button, edit } from '../../overlapStyle';

export const DetailTodoContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(241, 241, 241);
`

export const DetailInner = styled.div`
    border-radius: 20px;
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    margin: auto;
    background-color: #fff;
    @media (max-width: 900px) {
        width: 80%;
    }
`

export const TodoDetail = styled.div`
    padding: 0 10%;
    margin-top: 10%;
`

export const TodoDetailTitle = styled.h2`
    font-size: 50px;
    color: #333;
    word-break: break-all; // 글자 넘침 방지
`

export const TodoDetailDate = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: darkgrey;
`

export const TodoDetailContent = styled.p`
    color: #333;
    font-size: 20px;
    font-weight: 600;
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
    margin-top: 30px;
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
    width: 90%;
    height: 250px;
    margin-left: 30px;  
    padding: 10px;
    background-color: rgb(242, 239, 239);
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 2px 3px 3px 2px rgb(243, 239, 239);
    border: 0;
    font-weight: 600;
`

export const DetailButtons = styled.div`
    position: absolute;
    width: 150px;
    display: flex;
    justify-content: space-around;
    bottom: 20px; right: 20px;
    margin-top: 10px;
`

export const EditButton = styled.button`
    ${button}
    background-color: rgb(214, 212, 212);
    color: #333;
`

export const DeleteButton = styled.button`
    ${button}
    background-color: rgb(247, 96, 96);
    color: #fff;
`