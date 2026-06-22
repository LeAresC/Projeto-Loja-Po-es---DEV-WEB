import axios from "axios"

const url = "http://localhost:3000"

async function postPocao(dadosPocao){
    return axios.post(url + "/pocoes", dadosPocao);
}

async function getPocoes(){
    return axios.get(url + "/pocoes");
}

async function deletePocao(id){
    return axios.delete(url + "/pocoes/" + id);
}

export default { postPocao, getPocoes, deletePocao}