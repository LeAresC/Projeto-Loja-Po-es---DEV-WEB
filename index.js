import router from "./routers/router.js";
import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const PORT = 3000
sequelize.sync()
    .then(() => {
        console.log("Banco de dados sincronizado na memória!");
        
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        })
    })
    .catch((erro) => {
        console.error("Erro ao sincronizar o banco de dados:", erro);
    })