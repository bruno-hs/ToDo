import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #393D46;
    border-bottom: 5px solid #ED8F23;

    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    button {
            background: none;
            border: none;
            cursor: pointer;
        }

    a, button {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

    &:hover{
        color: #ee6b26;
    }

        img {
            width: 25px;
            height: 30px;
        }

        span {
            background: #FFF;
            color: #ee6b26;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }

        &:hover {
            opacity: 0.5;
        }
}

    .dividir::after {
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }

    button {
        font-size: 16px;
    }

`