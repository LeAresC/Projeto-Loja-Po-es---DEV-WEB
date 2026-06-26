import router from "./routers/router.js";
import express from "express"
import cors from "cors"
import sequelize from "./models/db.js";
import pocao from "./models/pocao.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const POCOES_INICIAIS = [
    {
        nome: "Poção Blue Sky",
        descricao: "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds",
        foto: "https://i.ibb.co/ZzS7xb2/rsz-sky.png",
        valor: 300
    },
    {
        nome: "Poção do Perfume Misterioso",
        descricao: "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
        foto: "https://i.ibb.co/pyhZJXf/rsz-lilas.png",
        valor: 200
    },
    {
        nome: "Poção de Pinus",
        descricao: "Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos",
        foto: "https://i.ibb.co/DkzdL1q/rsz-pinus.png",
        valor: 3000
    },
    {
        nome: "Poção da Beleza Eterna",
        descricao: "Veneno que mata rápido.",
        foto: "https://i.ibb.co/9p872NK/rsz-1beleza.png",
        valor: 100
    },
    {
        nome: "Poção do Arco Íro",
        descricao: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
        foto: "https://i.ibb.co/PrC09MP/rsz-2unicornio.png",
        valor: 120
    },
    {
        nome: "Caldeirão das Verdades Secretas",
        descricao: " As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L",
        foto: "https://i.ibb.co/s9Lyvj8/rsz-verdades.png",
        valor: 150
    }
];

const PORT = 3000

async function iniciar() {
    try {
        await sequelize.sync()

        await pocao.bulkCreate(POCOES_INICIAIS)

        app.listen(PORT, () => {
            console.log(`Servidor da Loja rodando na porta ${PORT}!`);
        })
    }catch(error){
        console.error("Erro ao inciar o backend", error)
    }
}

iniciar()
