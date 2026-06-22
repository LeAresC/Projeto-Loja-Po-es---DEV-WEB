import pocaomodel from "../models/pocao.js"

class ControllerPocoes {}

ControllerPocoes.create = async function(req, res){
    try{
        const {nome, descricao, foto, valor} = req.body

        if(!nome || !descricao || !foto || valor === undefined)
        return res.status(400).json({erro: 'Campos Obrigatórios não foram inseridos'})

        const novaPocao = await pocaomodel.create({
            nome,
            descricao,
            foto,
            valor
        })

        return res.status(201).json(novaPocao)
    }
    catch(error){
        console.error('Erro no cadastro:', error)
        res.status(500).json({error: 'Erro interno ao salvar no banco de dados'})
    }
}

ControllerPocoes.findAll = async function(req, res){
    try{
        const pocoes = await pocaomodel.findAll()
        return res.status(200).json(pocoes)
    }
    catch(error){
        console.error('Erro na listagem:', error)
        res.status(500).json({error : 'Erro interno ao buscar dados'})
    }
}

ControllerPocoes.delete = async function(req, res){
    try{
        const {id} = req.params;

        const pocao = await pocaomodel.findByPk(id)

        if(!pocao){
            return res.status(404).json({error: 'Poção não encontrada'})
        }

        await pocao.destroy()

        return res.status(204).send()
    }
    catch(error){
        return res.status(500).json({error: 'Erro interno na deleção'})
    }
}

export default ControllerPocoes