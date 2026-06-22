import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import MyRoutes from "./routes/MyRoutes.jsx"

export default function App(){
    return(<BrowserRouter>
        <div className="App">
          <Navigation />
          <MyRoutes/>
        </div>
    </BrowserRouter>
    )
}