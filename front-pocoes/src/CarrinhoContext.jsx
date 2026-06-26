import { createContext, useState } from "react"

export const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }){
    const [carrinho, setCarrinho] = useState([])

    const [isCartOpen, setIsCartOpen] = useState(false);


    function adicionarAoCarrinho(pocao){
        setCarrinho([...carrinho, pocao])
        alert(`${pocao.nome} adicionada ao carrinho`)
    }

    function limparCarrinho(){
        setCarrinho([])
    }

    function toggleCarrinho() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CarrinhoContext.Provider value = {{carrinho, adicionarAoCarrinho, limparCarrinho, isCartOpen, toggleCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}