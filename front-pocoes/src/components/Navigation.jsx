import { NavLink } from "react-router-dom"

export default function Navigation (){
    return(<nav>
        <ul>
            <li><NavLink to= "/pocoes">Loja de Poções</NavLink></li>
            <li><NavLink to= "/nova-pocao">Criar Poção</NavLink></li>
            <li><NavLink to= "/">Página Incial</NavLink></li>
        </ul>
    </nav>
    )
}