import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default function Paciente() {
    const [febre, setFebre] = useState('')
    const [gripe, setGripe] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [cirurgia, setCirurgia] = useState('')
    const [cigarro, setCigarro] = useState('')
    const [alcool, setAlcool] = useState('')

    return (
        <>
        <main>
            <Header />
            <h1>Escolha a unidade</h1>
            <form>
                <div>
                    <select id="unidade" class="form-select">
                        <option value="" disabled selected>Unidade*</option>
                        <option value="hospital notrecare sorocaba" >Hospital NotreCare Sorocaba, Sorocaba (SP)</option>
                        <option value="hospital nova vida" >Hospital Nova Vida, Itapevi (SP)</option>
                        <option value="hospital renascença campinas" >Hospital Renascença Campinas, Campinas (SP)</option>
                        <option value="hospital santana" >Hospital Santana, Mogi das cruzes (SP)</option>
                        <option value="hospital são bernardo" >Hospital São Bernardo, São Bernardo do Campo (SP)</option>
                        <option value="hospital infantil intermédica jacarepaguá" >Hospital Infantil Intermédica Jacarepaguá, Rio de Janeiro (RJ)</option>
                        <option value="hospital intermédica anália franco" >Hospital Intermédica Anália Franco, São Paulo (SP)</option>
                        <option value="hospital notrecare rio" >Hospital NotreCare Rio, Rio de Janeiro (RJ)</option>
                        <option value="hospital family" >Hospital Family, Taboão da Serra (SP)</option>
                        <option value="hospital frei galvão" >Hospital Frei Galvão, Santos (SP)</option>
                    </select>
                </div>
                <h1>Agora é a sua Triagem Virtual</h1>
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
        <Footer/>
        </>
    )
}