import styled from 'styled-components';

export const HeaderContain = styled.div`
    position: relative;
    width: 100vw;
    height: 70px;
`
export const HeaderInner = styled.div`
    position: absolute;
    width: 75%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.p`
    margin-top: 20px;
    width: 60px;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`

export const MenuList = styled.ul`
    margin-top: 25px;
    margin-right: 30px;
    display: flex;
    gap: 50px;
`

export const MenuItem = styled.li`
    transition: .3s;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    &:hover {
        color: rgb(128, 127, 127);
    }
`