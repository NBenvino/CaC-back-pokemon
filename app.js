import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import db from "./database/db.js";
import { PORT } from "./config.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);
try {
  await db.authenticate();
  console.log(`Conexión exitosa con la base de datos en el puerto ${PORT}`);
} catch (error) {
  console.log(`Conexión fallida, error: ${error}`);
}

app.listen(PORT);
