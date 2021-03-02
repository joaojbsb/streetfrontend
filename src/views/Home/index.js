import React,{useState, useEffect} from 'react';
import * as S from './style';
import api from '../../services/api';
import {Link} from 'react-router-dom';

//importando componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';


function Home(){

    const [filterActived, setFilterActived] = useState('all');
    const [lutadores, setLutadores] = useState([]);

    //função para carregar todos os lutadores na variavel lutadores
    async function loadLutadores(){
        await api.get(`/lutador/filter/${filterActived}/`)
        .then(response =>{
             setLutadores(response.data);
             console.log(response.data);
        }).catch(error => {
            return (error);
        })


     }
    
    //toda vez que a tela é carregada dispara o useEffect e toda vez que mudar o estado do filtarActived
    useEffect(() =>{
        loadLutadores();
    }, [filterActived]);


    return (
        <S.Container>
            <Header/> 
            <S.Content>
                {

                    lutadores.map(t =>(
                    <Link to={`/lutador/${t._id}`}>
                        <Card id = {t._id} nome={t.Nome} nacionalidade={t.Nacionalidade} descricao={t.Descricao} imagem={t.Imagem}/>
                    </Link>                    
                    ))
                }

            </S.Content>
   
  
        </S.Container>
    )
}

export default Home;