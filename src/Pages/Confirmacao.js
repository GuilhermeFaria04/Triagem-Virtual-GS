import logo from "../Img/notreLogo.png"
import certo from "../Img/certoVerde.png"


export default function Confirmacao(){
    const nome = localStorage.getItem('nome')
    const telefone = localStorage.getItem('tel')
    const cpf = localStorage.getItem('cpf')
    const unidade = localStorage.getItem('unidade')

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