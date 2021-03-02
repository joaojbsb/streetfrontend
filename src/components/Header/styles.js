import Styled from 'styled-components';

export const Container = Styled.div`
    width: 100%;
    height: 90px;
    background: #F29B30;
    display: flex;
`;

export const ContentRight = Styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center; 

    a{
        text-decoration: none;
        font-size: 18px;
        color: #034AA6;
        font-weight: bold;

        &:hover{
            color: #D90404;
        }
    }

`;

export const ContentLeft = Styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;     

    img{
        width: 170px;
        height: 80px;
        margin: 10px;
        margin-left: 30px;
        margin-top: 30px;
    }

`;