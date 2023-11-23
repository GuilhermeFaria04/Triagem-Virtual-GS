import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Header";
import Title from "../Components/Title";
import Footer from "../Components/Footer";




export default function Paciente() {
    const [cpf, setCpf] = useState('')
    const [alergia, setAlergia] = useState('')
    const [tp, setTp] = useState('')
    const [remedio, setRemedio] = useState('')
    const [data, setData] = useState('')
    const [sexo, setSexo] = useState('')
    const [doencas, setDoencas] = useState('')
    const [peso, setPeso] = useState('')
    const [telefone, setTelefone] = useState('')

    const navegacao = useNavigate()

    function salvarInfos(){
        localStorage.setItem('cpf', cpf)
        navegacao('/triagem')
    }

    return (
        <>
            <main>
                <Header />
                <Title text='Dados do Paciente' />
                <form onSubmit={salvarInfos}>
                    <div>
                        <input
                            placeholder="Cpf *"
                            type="text"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                        />
                        <input
                            placeholder="Alergia à remédios"
                            type="text"
                            value={alergia}
                            onChange={(e) => setAlergia(e.target.value)}
                        />
                        <input
                            placeholder="Tipo Sanguineo*"
                            type="text"
                            value={tp}
                            onChange={(e) => setTp(e.target.value)}
                            maxLength="3"
                            required
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Remedios de uso diario"
                            type="text"
                            value={remedio}
                            onChange={(e) => setRemedio(e.target.value)}
                        />
                        <input
                            placeholder="Data de nascimento *"
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            required
                        />
                        <input
                            placeholder="Sexo *"
                            type="text"
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Doenças"
                            type="text"
                            value={doencas}
                            onChange={(e) => setDoencas(e.target.value)}
                        />
                        <input
                            placeholder="Peso *"
                            type="text"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                            required
                        />
                        <input
                            placeholder="Telefone de Emergência *"
                            type="tel"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Salvar Informações</button>
                </form>
            </main>
            <Footer />
        </>
    )
}