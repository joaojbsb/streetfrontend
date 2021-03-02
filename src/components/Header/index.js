import Logo from '../../imagens/logo.png';
import * as S from './styles';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <S.Container>
            <S.ContentLeft>
                <Link to="/">  <img src={Logo} alt="Logo"></img></Link>
            </S.ContentLeft>

            <S.ContentRight>
                <Link to="/">INÍCIO</Link>                
            </S.ContentRight>

        </S.Container>
    )
}


export default Header;