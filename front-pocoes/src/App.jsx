import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import MyRoutes from "./routes/MyRoutes.jsx"

export default function App(){
    return(
        <div className="min-h-screen bg-zinc-900">
        <BrowserRouter>
            <div className="App">
            <Navigation />
            <MyRoutes/>
            </div>
        </BrowserRouter>
        </div>
    )
}