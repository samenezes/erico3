import { useLocalStorage } from "@uidotdev/usehooks"
import { useState } from "react"
import Temperatura from "../components/Temperatura"
import { Link } from "react-router-dom"

export default function Home() {
    const [lista, setLista] = useLocalStorage("lista", [])
    const [novaTemperatura, setNovaTemperatura] = useState("")
    const [novaCidade, setNovaCidade] = useState("")

    function adicionarTemperatura() {
        if (novaTemperatura == "") return 
        setLista([...lista, {
            id: lista.length + 1,
            temp: novaTemperatura,
            cidade: novaCidade,
            excluida: false
        }])
        setNovaTemperatura("")
    }

    return (
    <div className="min-h-screen p-4 flex flex-col gap-4 p-4">
        <div className="form-control mx-auto">
            <label>
                <span className="label-text">Digite uma nova Temperatura</span>
            </label>
            <br/>
            <input
                className="input input-bordered"
                type="text" 
                value={novaTemperatura}
                onChange={(e) => setNovaTemperatura(e.target.value)}
            />
            <br/>
            <input
                className="input input-bordered"
                type="text" 
                value={novaCidade}
                onChange={(e) => setNovaCidade(e.target.value)}
            />
                        <br/>
            <button className="btn mt-4" onClick={adicionarTemperatura}>Adicionar</button>
        </div>
        <main className="grid grid-cols-2 gap-4">
            <ul className="bg-neutral p-4 rounded">
                Temps:
                {lista.filter(temperatura => !temperatura.completa).map((temperatura, posicao) => (
                    <Temperatura  key={posicao} id={temperatura.id} temp={temperatura.temp} cidade={temperatura.cidade} excluida={temperatura.excluida} />
                ))}
            </ul>
        </main>

        <Link to="/add">Ver Adicionadas</Link>
        <br/>
        <Link to="/del">Ver deletadas</Link>
    </div>
)}