import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import MyRoutes from "./routes/MyRoutes.jsx"
import { CarrinhoProvider } from "./CarrinhoContext.jsx"
import Footer from "./components/Footer.jsx"
import SidebarCarrinho from "./components/SidebarCarrinho.jsx"


export default function App(){
    return(
        <div className="min-h-screen bg-zinc-800 flex flex-col">
        <CarrinhoProvider>
        <BrowserRouter>
            <div className="App">
            <Navigation />
            <SidebarCarrinho/>
            <MyRoutes/>
            </div>
        <Footer />
        </BrowserRouter>
        </CarrinhoProvider>
        </div>
        
    )
}