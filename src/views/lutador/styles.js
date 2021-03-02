import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;

`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;

    h1{
        color:#f12711;
    }

    h2{
        color:#F29B30;
        font-weight: bold;
    }


`;

export const Form = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    border: 2px solid #000;
    border-radius: 15px;
    
    
    h3{
        text-align: center;
    }

    @media (max-width: 600px)
    {
        flex-direction: column;
        width:100%;
        align-items: center;

        img{
            width: 100%;
        }  
    }

    span{
        color: #BF0436;
        font-weight: bold;
    }

`;

export const FormGolpes = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;


export const Golpes = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-content: space-between;
    background: red;
`;


export const Imagem = styled.div`
    width: 50%; 
    margin:10px;
    img{
        width: 100%;
    }  

`;

export const Informations = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export const Description = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid #000;
    border-radius: 15px;

    h3{
        text-align: center;
        color:#F29B30;
    }

    p{
        margin: 10px;
        line-height: 30px;
        text-align: justify;
        padding: 10px;

    }

    @media (max-width: 600px)
    {
         width:100%;
        align-items: center;

    }
`;

