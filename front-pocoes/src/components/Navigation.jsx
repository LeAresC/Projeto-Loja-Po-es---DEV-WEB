import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { CarrinhoContext } from "../CarrinhoContext";

export default function Navigation() {

    const { toggleCarrinho, carrinho } = useContext(CarrinhoContext);

    return (

        <nav className="flex p-4 bg-zinc-950 rounded-md mb-8 justify-between items-center shadow-2xl">
            <ul className="flex items-center gap-8">
                <li><NavLink to="/" className="text-gray-300 hover:text-yellow-500">Página Incial</NavLink></li>
                <li><NavLink to="/admin" className="text-gray-300 hover:text-yellow-500">Admin</NavLink></li>
            </ul>

            <div>
                <button 
                    onClick={toggleCarrinho}
                    className="flex items-center gap-2 border border-gray-500 hover:border-yellow-500 hover:text-yellow-500 text-gray-300 font-gill px-4 py-2 rounded-md transition-all cursor-pointer"
                >
                    Carrinho ({carrinho.length})
                </button>
            </div>

        </nav>
    )
}