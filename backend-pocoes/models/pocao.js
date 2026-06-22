import sequelize from "./db.js"
import { Model, DataTypes } from "sequelize"

class pocao extends Model {}

pocao.init(
    {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        nome: {type: DataTypes.STRING, allowNull: false},
        descricao: {type: DataTypes.STRING, allowNull: false},
        foto: {type: DataTypes.STRING, allowNull: false},
        valor: {type: DataTypes.INTEGER, allowNull: false},
    },
    { sequelize: sequelize, timestamps: false},
)

export default pocao