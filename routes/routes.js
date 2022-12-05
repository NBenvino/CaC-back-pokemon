import express from "express";

import showUsers, {
  showUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/controller.js";

const routes = express.Router();

routes.get("/", showUsers);
routes.get("/:id", showUser);
routes.post("/", createUser);
routes.put("/:id", updateUser);
routes.delete("/:id", deleteUser);

export default routes;
