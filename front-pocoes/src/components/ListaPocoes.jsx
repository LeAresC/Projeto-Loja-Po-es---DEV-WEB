import Pocao from "./Poção.jsx";
import { useEffect, useState } from "react";
import pocoesApi from "../api/pocoes.api.js";

export default function ListaPocoes(){
    const [pocoes, setpocoes] = useState([])

    useEffect(() =>{
        async function buscarNoEstoque() {
            try{
                const res = await pocoesApi.getPocoes()
                setpocoes(res.data)
            } catch(error){
                console.error("Erro ao buscar as poções:", error)   
            }
        }
        buscarNoEstoque()
    }, [])

    return(
        <div>
            <h1>Lista de Poções</h1>
            {pocoes.map(function(pocao) {
                return(
                    <Pocao
                        key = {pocao.id}
                        id = {pocao.id}
                        nome = {pocao.nome}
                        descricao = {pocao.descricao}
                        foto = {pocao.foto}
                        valor = {pocao.valor}
                    />
                )
            })}
        </div>
    )
}