import usersModel from "../models/model.js";

const showUsers = async (req, res) => {
  try {
    const allUsers = await usersModel.findAll();
    res.json(allUsers);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const showUser = async (req, res) => {
  try {
    const user = await usersModel.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    await usersModel.create(req.body);
    res.json({ message: "Usuario creado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    await usersModel.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Usuario actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await usersModel.destroy({ where: { id: req.params.id } });
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export default showUsers;
export { showUser, createUser, updateUser, deleteUser };
