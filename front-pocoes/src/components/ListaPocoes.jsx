import Pocao from "./Poção.jsx";
import { useEffect, useState, useRef } from "react";
import pocoesApi from "../api/pocoes.api.js";



export default function ListaPocoes() {
    const [pocoes, setpocoes] = useState([]);
    
  
    const carrosselRef = useRef(null);

    useEffect(() => {
        async function buscarNoEstoque() {
            try {
                const res = await pocoesApi.getPocoes();
                setpocoes(res.data);
            } catch (error) {
                console.error("Erro ao buscar as poções:", error);
            }
        }
        buscarNoEstoque();
    }, []);

   
    const rolarEsquerda = () => {
     
        carrosselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const rolarDireita = () => {
       
        carrosselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="p-8  mx-auto">
            
            <div className="mb-10 flex flex-col items-center gap-4">
                <h1 className="text-center font-header text-5xl drop-shadow-lg text-purple-400">
                    Loja de Poções
                </h1>
                
                
                <div className="flex gap-4">
                    <button 
                        onClick={rolarEsquerda} 
                        className="bg-zinc-800 hover:bg-purple-600 text-purple-400 hover:text-white border border-purple-500/30 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-colors cursor-pointer shadow-lg"
                    >
                        {"<"}
                    </button>
                    <button 
                        onClick={rolarDireita} 
                        className="bg-zinc-800 hover:bg-purple-600 text-purple-400 hover:text-white border border-purple-500/30 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-colors cursor-pointer shadow-lg"
                    >
                        {">"}
                    </button>
                </div>
            </div>

           
            <div 
                ref={carrosselRef} 
                className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {pocoes.map(function (pocao) {
                    return (
                        <div key={pocao.id} className="shrink-0 snap-center flex h-full">
                            <Pocao
                                nome={pocao.nome}
                                descricao={pocao.descricao}
                                foto={pocao.foto}
                                valor={pocao.valor}
                            className="border-purple-500"/>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}