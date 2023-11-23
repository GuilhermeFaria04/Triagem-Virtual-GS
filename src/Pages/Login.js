import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../Img/notreLogo.png"


export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navegacao = useNavigate()

    function login(){
        localStorage.setItem('session', email)
        navegacao('/paciente')
    }
    return (
        <div class="auth-container">
            <img src={logo} alt="Logo NotreDame"/>
            <form onSubmit={login}>
            <input 
                    placeholder="Email *"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    placeholder="Senha *"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    title="Não pode deixar vazio"
                />
                <button type="submit">Entrar</button>
            </form>
            <p onClick={() => navegacao('/cadastro')}>Não tem uma conta? Registre-se!</p>
        </div>
    )
}