import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px;

    .inative {
        opacity: 0.5;
    }

    button {
        background: none;
        border: none;
    }

    img {
        width: 55px;
        height: 55px;
        margin: 6px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;

        }
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    input::-webkit-calendar-picker-indicator { background: none; }
    input::-webkit-time-picker-indicator { background: none; }

    span{
        color: #000000;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ED8F23;
    }

    img {
        width: 22px;
        height: 22px;
        position: relative;
        left: 95%;
        bottom: 35px;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #000000;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        border: 1px solid #ED8F23;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        color: #393D46;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #ED8F23;
        font-weight: bold;
        font-size: 18px;
    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;
    
    button {
        width: 100%;
        background: #ED8F23;
        border: none;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;
        
        &:hover {
            opacity: 0.8;
        }
    }
`