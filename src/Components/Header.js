import '../style.scss';
import logo from '../img/notreLogo.png';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navegação = useNavigate()
    return(
        <header>
            <ul>
                <img src={logo} alt="Logo da NotreDame"/>
                <li onClick={() => {navegação('/paciente')}}>Paciente</li>
                <li onClick={() => {navegação('/triagem')}}>Triagem</li>
            </ul>
        </header>
    )
}