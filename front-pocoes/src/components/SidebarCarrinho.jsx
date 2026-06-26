import { useContext } from "react";
import { CarrinhoContext } from "../CarrinhoContext";

export default function SidebarCarrinho() {
    const { carrinho, limparCarrinho, isCartOpen, toggleCarrinho } = useContext(CarrinhoContext);

    function handleClick(){
        limparCarrinho()
        alert("Compra Finalizada Com Sucesso")
    }
    return (
        <>
            {isCartOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-40 transition-opacity" 
                    onClick={toggleCarrinho}
                ></div>
            )}

           
            <div 
                className={`fixed top-0 right-0 h-full w-96 bg-zinc-950 border-l border-purple-500/30 z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                
                <div className="flex justify-between items-center p-6 border-b border-zinc-800">
                    <h2 className="text-2xl text-purple-400 font-header">Seu Caldeirão</h2>
                    <button onClick={toggleCarrinho} className="text-gray-400 hover:text-white text-2xl font-bold cursor-pointer">
                        ✕
                    </button>
                </div>

                
                <div className="flex-1 overflow-y-auto p-6 text-gray-300">
                    {carrinho.length === 0 ? (
                        <p className="text-gray-500 italic text-center mt-10">O caldeirão está vazio...</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {carrinho.map((item, index) => (
                                <div key={index} className="flex justify-between items-center bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                                    <div className="flex items-center gap-3">
                                        <img src={item.foto} alt={item.nome} className="w-12 h-12 object-contain" />
                                        <span className="font-gill">{item.nome}</span>
                                    </div>
                                    <span className="text-yellow-500 font-bold">{item.valor} 🪙</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                
                {carrinho.length > 0 && (
                    <div className="p-6 border-t border-zinc-800 bg-zinc-900">
                        <button 
                            onClick={limparCarrinho}
                            className="w-full bg-red-900/50 hover:bg-red-800 text-red-100 border border-red-500/50 px-4 py-2 rounded-md transition-colors font-gill cursor-pointer mb-3"
                        >
                            🗑️ Esvaziar Caldeirão
                        </button>
                        <button onClick= {handleClick} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-md transition-colors shadow-lg shadow-yellow-500/20 cursor-pointer">
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}