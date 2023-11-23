import logo from "../Img/notreLogo.png"
import certo from "../Img/certoVerde.png"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Confirmacao(){
    const nome = localStorage.getItem('nome')
    const telefone = localStorage.getItem('tel')
    const cpf = localStorage.getItem('cpf')
    const unidade = localStorage.getItem('unidade')
    const session = localStorage.getItem('session')

    const navegacao = useNavigate()

    useEffect(() => {
        if(session){

        } else{
            navegacao('/')
        }
        if(cpf && unidade){

        } else{
            navegacao('/paciente')
        }
    })

    return(
        <div className="container-confirmacao">
            <img src={logo} alt="Logo NotreDame"/>
            <div className="card">
                <div>
                    <p>Nome: {nome}</p>
                    <p>CPF: {cpf}</p>
                    <p>Telefone: {telefone}</p>
                    <p>Unidade escolhida: {unidade}</p>
                </div>
                <img src={certo} alt="Vetor certo verde"/>
            </div>
        </div>
    )
}