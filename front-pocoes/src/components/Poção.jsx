import { useContext } from "react"
import { CarrinhoContext } from "../CarrinhoContext"

export default function Pocao(props){

    const {adicionarAoCarrinho} = useContext(CarrinhoContext)

    return(
        <div className="flex flex-col text-gray-300 ml-4 h-110 w-72 p-6 bg-zinc-950 hover:bg-zinc-950/50 transition-colors rounded-xl shadow-lg gap-3">
            <img src={props.foto} alt={props.nome} className="mx-auto w-32 h-32 object-contain rounded-md" />
            <p className="text-center text-xl font-gill-bold">{props.nome}</p>
            <p className="font-gill flex-1">{props.descricao}</p>
            <p className="font-gill ">Preço: {props.valor} 🪙 </p>
            <button onClick={() => adicionarAoCarrinho(props)} className="font-bold text-black bg-yellow-500 rounded-md hover:bg-yellow-400 py-1">
                Comprar
            </button>
        </div>
    )

}
