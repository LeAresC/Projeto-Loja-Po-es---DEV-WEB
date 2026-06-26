import pocoesApi from "../api/pocoes.api.js";
import { useState } from "react";

export default function FormularioCadastro(props){
       
        const [formData, setformData] = useState({nome: "", descricao: "", foto: "", valor: ""});

        async function handleSubmit(event){
            event.preventDefault()
            try{
             
                const pocaoParaSalvar = {
                    ...formData,
                    valor: Number(formData.valor) 
                }

                const result = await pocoesApi.postPocao(pocaoParaSalvar)
                
                if(result.status == 200 || result.status == 201){
                    alert("Poção Cadastrada com sucesso")
                    
                    setformData({nome: "", descricao: "", foto: "", valor: ""})
                }
            } catch (error) {
                console.error("Erro ao salvar a poção:", error);
                alert("Ocorreu um erro ao tentar cadastrar a poção.");
            }
        }

        async function handleChange(event){
            setformData({
                ...formData,
                [event.target.name]: event.target.value
            })
        }

        return(
            <div className="max-w-3xl mx-auto  p-6 bg-zinc-950 rounded-xl border shadow-lg">
                <h2 className="text-4xl font-header text-center text-purple-400 mb-6">  Cadastrar Poção </h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                   
                   

                    <div className= "flex flex-wrap items-center gap-4">
                        <label className="font-gill w-24 text-gray-300">Nome:</label>
                        <input type= "text" name="nome" value={formData.nome} onChange={handleChange} 
                        placeholder="Ex: Poção de Cura"
                        className="flex-1 border border-gray-300  text-gray-300 bg-transparent rounded-md p-2 shadow-lg 
                        focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-500 transition-colors"/>
                    </div>

                    <div className= "flex flex-wrap items-center gap-4">
                        <label className="font-gill w-24 text-gray-300">Descrição:</label>
                        <input type= "text" name="descricao" value={formData.descricao} onChange={handleChange}
                        placeholder="Ex: Restaura 50 pontos de vida..."
                        className="flex-1 border border-gray-300  text-gray-300 bg-transparent rounded-md p-2 shadow-lg
                        focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-500 transition-colors"/>
                    </div>

                    <div className= "flex flex-wrap items-center gap-4">
                        <label className="font-gill w-24 text-gray-300">Foto:</label>
                        <input type= "text" name="foto" value={formData.foto} onChange={handleChange}
                        placeholder="Ex: https://urlexemplo/foto"
                        className="flex-1 border border-gray-300 rounded-md bg-transparent text-gray-300 p-2 shadow-lg
                        focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-500 transition-colors"/>
                    </div>

                    <div className= "flex flex-wrap items-center gap-4">
                        <label className="font-gill w-24 text-gray-300">Valor:</label>
                        <input type="number" name="valor" value={formData.valor} onChange={handleChange} 
                        placeholder="Ex: 300"
                        className="flex-1 border border-gray-300 rounded-md bg-transparent text-gray-300 p-2 shadow-lg
                        focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-500 transition-colors"/>
                    </div>

                    <div className="text-center mt-4 bg-yellow-500 hover:bg-yellow-400 transition-colors text-black py-2 rounded-md p-2 mx-auto w-36 cursor-pointer">
                        <button type="submit" className="font-gill-bold w-full h-full">Salvar</button>
                    </div>
                </form>
            </div>
        )
}