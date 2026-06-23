import pocoesApi from "../api/pocoes.api.js";
import { useState } from "react";

export default function FormularioCadastro(props){
        const [formData, setformData] = useState({nome: "", descricao: "", foto: "", valor: ""});

        async function handleSubmit(event){
            event.preventDefault()
            try{
            const result = await pocoesApi.postPocao(formData)
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
            <div className="max-w-md mx-auto mt-12 p-6 bg-zinc-950 rounded-xl border shadow-lg">
            <h2 className="text-3xl font-gill-bold text-center text-purple-400  mb-6"> 🧪 Criar Poção 🪄</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className= "flex flex-col gap-4">
                    <label className="font-gill w-24 text-gray-300">Nome</label>
                    <input type= "text" name="nome" value={formData.nome} onChange={handleChange} className="flex-1 border border-gray-300  text-gray-300 rounded-md p-2 shadow-lg"/>
                </div>

                <div className= "flex flex-col gap-4">
                    <label className="font-gill w-24 text-gray-300">Descrição</label>
                    <input type= "text" name="descricao" value={formData.descricao} onChange={handleChange} className="flex-1 border border-gray-300  text-gray-300 rounded-md p-2 shadow-lg"/>
                </div>

                <div className= "flex flex-col gap-4">
                    <label className="font-gill w-24 text-gray-300">Foto</label>
                    <input type= "text" name="foto" value={formData.foto} onChange={handleChange} className="flex-1 border border-gray-300 rounded-md  text-gray-300 p-2 shadow-lg"/>
                </div>

                <div className= "flex flex-col gap-4">
                    <label className="font-gill w-24 text-gray-300">Valor</label>
                    <input type= "text" name="valor" value={formData.valor} onChange={handleChange} className="flex-1 border border-gray-300 rounded-md  text-gray-300 p-2 shadow-lg"/>
                </div>

                <div className="text-center mt-4 bg-yellow-500 text-black py-2 rounded-md p-2 mx-auto w-30">
                    <button type="submit" className="font-gill-bold">Salvar</button>
                </div>
            </form>
            </div>
        )
}