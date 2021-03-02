import React, {useMemo} from 'react';
import * as S from './styles';



//recuperar do map da página home com propriedades type,title,date,hour
function Card({id, descricao, imagem, nacionalidade, nome}){

    return (
        <S.Container>
            <S.TopCard>
                <img src={imagem} alt= "Icone da Tarefa"/>
                <hr></hr>
                <h3>{nome}</h3>
            </S.TopCard>

            <S.BottomCard>

            </S.BottomCard>

        </S.Container>
    )
}

export default Card;