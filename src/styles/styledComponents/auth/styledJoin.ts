import styled from 'styled-components';
import { inputBasicStyle } from '../overlapStyle'

export const JoinContain = styled.div`
    position: relative;
    margin: auto;
    width: 80%;
    height: 400px;
`

export const Text = styled.h1`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-top: 20%;
`

export const InputContain = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const AuthInput = styled.input`
    ${inputBasicStyle};
    transition: .3s;
    padding: 20px;
    box-shadow: 4px 5px 5px 1px rgb(243, 239, 239);
    &:hover {
        box-shadow: none;
    }
`

export const BtnContain = styled.div`
    display: flex;
`

export const AuthButton = styled.button`
    ${inputBasicStyle};
    width: 45%;
    font-weight: 700;
    cursor: pointer;
    background-color: rgb(182, 129, 129);
    color: #fff;
`

export const JoinButton = styled.button`
    ${inputBasicStyle};
    background-color: #A6BB8D;
    color: #fff;
    &:hover {
        background-color: #A6BB8D;
        color: #fff;
    }
`

