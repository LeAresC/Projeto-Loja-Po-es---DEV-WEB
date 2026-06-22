import { Route, Routes } from "react-router-dom"

import FormularioCadastro from "../components/FormularioCadastro.jsx"
import ListaPocoes from "../components/ListaPocoes.jsx"
import BoasVindas from "../components/BoasVindas.jsx"


export default function MyRoutes(){
    return(<Routes>
        <Route element={<FormularioCadastro />} path="/nova-pocao"/> 
        <Route element={<ListaPocoes />} path= "/pocoes"/>
        <Route element={<BoasVindas />} path="/"/>
    </Routes>)
}