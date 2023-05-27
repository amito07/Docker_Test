import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const {STRING} = DataTypes;

const User = sequelize.define("user",{
    name: STRING,
    email: STRING
})

export default User;