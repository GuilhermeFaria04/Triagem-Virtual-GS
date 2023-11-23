import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Title from "../Components/Title";
import { useNavigate } from "react-router-dom";


export default function Paciente() {
    const [febre, setFebre] = useState('')
    const [gripe, setGripe] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [cirurgia, setCirurgia] = useState('')
    const [cigarro, setCigarro] = useState('')
    const [alcool, setAlcool] = useState('')
    const [unidade, setUnidade] = useState('')
    const navegacao = useNavigate()

    function submit(){
        localStorage.setItem('unidade', unidade)
        navegacao('/confirmacao')
    }

    return (
        <>
            <main>
                <Header />
                <Title text='Escolha a unidade' />
                <form onSubmit={submit}>
                    <div>
                        <select id="unidade" class="form-select" onChange={e => setUnidade(e.target.value)}>
                            <option value="" disabled selected>Unidade*</option>
                            <option value="Hospital NotreCare Sorocaba, Sorocaba (SP)" >Hospital NotreCare Sorocaba, Sorocaba (SP)</option>
                            <option value="Hospital Nova Vida, Itapevi (SP)" >Hospital Nova Vida, Itapevi (SP)</option>
                            <option value="Hospital Renascença Campinas, Campinas (SP)" >Hospital Renascença Campinas, Campinas (SP)</option>
                            <option value="Hospital Santana, Mogi das cruzes (SP)" >Hospital Santana, Mogi das cruzes (SP)</option>
                            <option value="Hospital São Bernardo, São Bernardo do Campo (SP)" >Hospital São Bernardo, São Bernardo do Campo (SP)</option>
                            <option value="Hospital Infantil Intermédica Jacarepaguá, Rio de Janeiro (RJ)" >Hospital Infantil Intermédica Jacarepaguá, Rio de Janeiro (RJ)</option>
                            <option value="Hospital Intermédica Anália Franco, São Paulo (SP)" >Hospital Intermédica Anália Franco, São Paulo (SP)</option>
                            <option value="Hospital NotreCare Rio, Rio de Janeiro (RJ)" >Hospital NotreCare Rio, Rio de Janeiro (RJ)</option>
                            <option value="Hospital Family, Taboão da Serra (SP)" >Hospital Family, Taboão da Serra (SP)</option>
                            <option value="Hospital Frei Galvão, Santos (SP)" >Hospital Frei Galvão, Santos (SP)</option>
                        </select>
                    </div>
                    <Title text='Agora é a sua Triagem Virtual' />
                    <div>
                        <input
                            placeholder="Tem ou Teve Febre? *"
                            type="text"
                            value={febre}
                            onChange={(e) => setFebre(e.target.value)}
                            required
                        />
                        <input
                            placeholder="Está com sintomas de gripe?(Ex:Corisa) *"
                            type="text"
                            value={gripe}
                            onChange={(e) => setGripe(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Quais são so seus sintomas? *"
                            type="text"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)}
                            required
                        />
                        <input
                            placeholder="Fez alguma cirurgia recentemente?(Se sim, Qual?)"
                            type="text"
                            value={cirurgia}
                            onChange={(e) => setCirurgia(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Faz uso de Cigarro ou drogas? *"
                            type="text"
                            value={cigarro}
                            onChange={(e) => setCigarro(e.target.value)}
                            required
                        />
                        <input
                            placeholder="Ingeriu bebidas alcoolicas recentemente? *"
                            type="text"
                            value={alcool}
                            onChange={(e) => setAlcool(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Finalizar Triagem</button>
                </form>
            </main>
            <Footer />
        </>
    )
}