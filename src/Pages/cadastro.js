import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../Img/notreLogo.png"
import axios from "axios"


export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [tel, settel] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [comp, setComp] = useState('')
    const [senha, setSenha] = useState('')
    const [cidade, setCidade] = useState('')
    const [numero, setNumero] = useState('')
    const navegacao = useNavigate()


    function api(){
        const promise = axios.get(
            `https://viacep.com.br/ws/${cep}/json`
        )
        promise.then((res) => {
            setCidade(res.data.localidade)
            setLogradouro(res.data.logradouro)
        })
    }

    if (cep.length === 8) {
        api()
    }

    function cadastro(){
        localStorage.setItem('cep', cep)
        navegacao('/')
    }
    return (
        <div class="auth-container">
            <img src={logo} alt="Logo NotreDame"/>
            <form onSubmit={cadastro}>
                <input 
                    placeholder="Nome *"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input 
                    placeholder="Email *"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    placeholder="Telefone *"
                    type="tel"
                    value={tel}
                    onChange={(e) => settel(e.target.value)}
                    required
                />
                <input 
                    placeholder="CEP *"
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    maxLength="8"
                    required                   
                />
                <input 
                    placeholder="Cidade *"
                    type="text"
                    value={cidade}
                    disabled
                    required
                />
                <input 
                    placeholder="Rua/Avenida *"
                    type="text"
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    required
                />
                <input 
                    placeholder="Número *"
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                />
                <input 
                    placeholder="Complemento"
                    type="text"
                    value={comp}
                    onChange={(e) => setComp(e.target.value)}
                />                
                <input 
                    placeholder="Senha *"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Cadastre-se</button>
            </form>
            <p onClick={() => navegacao('/')}>Já tem uma conta? Faça login!</p>
        </div>
    )
}