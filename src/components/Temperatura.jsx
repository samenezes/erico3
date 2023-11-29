import { useLocalStorage } from "@uidotdev/usehooks"
import './temp.css'

function Temperatura({ id, temp, cidade, excluida }) {
    const [lista, setLista] = useLocalStorage("lista",[])
        
    function check() {
        const tmpLista = lista.map((tarefa) => {
            if (tarefa.id == id) tarefa.excluida = !tarefa.excluida
            return tarefa
        })
        setLista(tmpLista)
    }

    return (
        <li className="flex gap-4 p-4 items-center">
            <input className="checkbox" type="checkbox" checked={excluida} onChange={check} />
            <h1 className="text-xl"> {cidade} </h1>
            <h2 className="text-xl"> {temp} </h2>
            <h3 className="text-xl"> {excluida} </h3>
        </li>
    )
}

export default Temperatura