// Definir rutas usuario
// Minimo -> Register, Login y Get User (??)
// Extras -> Google 

import express from "express";

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ msg: "Hello World"})
})

router.post("/", async (req, res) => {
  const { email, name, password } = req.body;

});

export default router;