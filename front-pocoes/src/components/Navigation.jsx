import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <div className="p-4 bg-zinc-950 rounded-md mb-8">
            <nav>
                <ul className="flex justify-start gap-8">
                    <li><NavLink to="/" className="text-gray-300 hover:text-yellow-500">Página Incial</NavLink></li>
                    <li><NavLink to="/pocoes" className="text-gray-300 hover:text-yellow-500">Administrar Poções</NavLink></li>
                    <li><NavLink to="/nova-pocao" className="text-gray-300 hover:text-yellow-500">Criar Poção</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}