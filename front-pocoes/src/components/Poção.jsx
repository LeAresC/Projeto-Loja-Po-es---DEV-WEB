export default function Pocao(props){
    const {id, nome, descricao, foto, valor } = props


    return(
        <div>
            <p>{props.nome}</p>
            <p>{props.descricao}</p>
            <p>{props.foto}</p>
            <p>{props.valor}</p>
        </div>
    )

}
