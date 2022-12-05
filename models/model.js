import db from "../database/db.js";
import { DataTypes } from "sequelize";

const users = db.define("users", {
  nick: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  team: { type: DataTypes.JSON },
});

export default users;
