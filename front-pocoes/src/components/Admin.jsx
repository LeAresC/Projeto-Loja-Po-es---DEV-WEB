import pocoesApi from "../api/pocoes.api"
import { useState, useEffect } from "react";
import FormularioCadastro from "./FormularioCadastro";

export default function Admin() {

    const [pocoes, setpocoes] = useState([]);

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

    async function lidarComExclusao(id, nome) {
        const confirmacao = window.confirm(`Tem certeza que deseja apagar a ${nome}?`)

        if(confirmacao){
            try{
                await pocoesApi.deletePocao(id)
                setpocoes(pocoes.filter(pocao => pocao.id !== id))
                alert("Poção apagada com sucesso!")   
            }catch(error){
                console.error("Erro ao apagar poção:", error);
                alert("Ocorreu um erro ao tentar apagar a poção.");
            }
        }
    }

    return (
        <div className="max-w-5xl mx-auto h-full w-full mb-12 mt-12 p-6 bg-zinc-950 border-purple-500/30 rounded-xl border shadow-lg">
            <h1 className="text-4xl  text-center font-header text-purple-400"> Selecione a Poção que Deseja Apagar</h1>
            {pocoes.map((pocao) => (
                
                <div key={pocao.id} className="grid grid-cols-4 items-center p-4 border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">

                    
                    <div className="col-span-2 flex items-center gap-4">
                        <img src={pocao.foto} alt={pocao.nome} className="w-10 h-10 object-contain drop-shadow-md" />
                        <span className="text-gray-300 font-gill text-lg">{pocao.nome}</span>
                    </div>

                    
                    <div className="text-center text-yellow-500 font-bold">
                        {pocao.valor} 🪙
                    </div>

                  
                    <div className="text-right">
                        <button
                            onClick={() => lidarComExclusao(pocao.id, pocao.nome)}
                            className="bg-red-900/40 hover:bg-red-600 text-red-200 px-4 py-2 rounded-md font-bold transition-colors cursor-pointer border border-red-500/50 shadow-sm"
                        >
                            Apagar
                        </button>
                    </div>

                </div>
            ))}
            <section className="py-12 ">
            <FormularioCadastro/>
            </section>
        </div>
    )
}