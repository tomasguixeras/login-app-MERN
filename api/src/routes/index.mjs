// Definir rutas usuario
// Minimo -> Register, Login y Get User (??)
// Extras -> Google 

import express from "express";

import { createUser, loginUser } from "../controllers/index.mjs";

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ msg: "Hello World"})
})

router.post("/create-user", createUser);

router.post("/login-user", loginUser);

export default router;