import React,{useState, useEffect} from 'react';
import * as S from './styles';
import api from '../../services/api';

//importando componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';


//match recupera os parametros da url
function Lutador({match}){

    const [nome, setNome] = useState();
    const [imagem, setImagem] = useState();
    const [idade, setIdade] = useState();
    const [nacionalidade, setNacionalidade] = useState();
    const [primeiraAparicao, setPrimeiraAparicao] = useState();
    const [estiloLuta, setEstiloLuta] = useState();
    const [descricao, setDescricao] = useState();
    const [apelido, setApelido] = useState();
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [golpe3, setGolpe3] = useState();

    async function LoadLutadorDetails(){
        await api.get(`/lutador/${match.params.id}`)
        .then(response =>{
            setNome(response.data.Nome)
            setImagem(response.data.Imagem)
            setIdade(response.data.Idade)
            setNacionalidade(response.data.Nacionalidade)
            setPrimeiraAparicao(response.data.PrimeiraAparicao)
            setEstiloLuta(response.data.EstiloLuta)
            setDescricao(response.data.Descricao)
            setApelido(response.data.Apelido)
            setAltura(response.data.Altura)
            setPeso(response.data.Peso)
            setGolpe3(response.data.Golpe3)
        })
    }

    useEffect(()=>{
        LoadLutadorDetails();
    },)

    
 
    return (
        <S.Container>
            <Header/> 
            <S.Content>
            <h1>{nome} </h1>
            <h2><span>{apelido}</span></h2>
                <S.Form>

                    <S.Imagem>
                        <img src={imagem} alt="Imagem do Lutador"></img>
                    </S.Imagem>
                    <S.Informations>
                        <p><span>Idade: </span>{idade}</p>
                        <p><span>Altura:  </span>{altura}, <span>Peso: </span>{peso}</p>
                        <p><span>Primeira Aparição: </span>{primeiraAparicao}</p>
                        <p><span>Nacionalidade: </span>{nacionalidade}</p>
                        <p><span>Estilo de Luta: </span>{estiloLuta}</p>
                    </S.Informations>

                </S.Form>

                <S.FormGolpes>
                    <iframe width="100%" height="330px" src={golpe3} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </S.FormGolpes>

                <S.Description>
                    <h3>História do Personagem</h3>
                    <p>{descricao}</p>
                </S.Description>
            </S.Content>

        </S.Container>
    )
}

export default Lutador;