import Temperatura from "../components/Temperatura"
import { useLocalStorage } from "@uidotdev/usehooks"


export default function temperaturasDel() {
    const [lista, setLista] = useLocalStorage("lista")
    return(
        <main className="grid grid-cols-2 gap-4">
            <ul className="bg-neutral p-4 rounded">
                Excluidas:
                {lista.filter(temperatura => temperatura.excluida).map((temperatura, posicao) => (
                    <Temperatura  key={posicao} id={temperatura.id} temp={temperatura.temp} cidade={temperatura.cidade} completa={temperatura.excluida} />
                ))}
            </ul>
        </main>
    )
}