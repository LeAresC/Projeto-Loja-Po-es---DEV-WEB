import { Route, Routes } from "react-router-dom"
import BoasVindas from "../components/BoasVindas.jsx"
import Admin from "../components/Admin.jsx"


export default function MyRoutes(){
    return(<Routes>
        <Route element={<BoasVindas />} path="/"/>
        <Route element={<Admin/>} path="/admin"/>
    </Routes>)
}