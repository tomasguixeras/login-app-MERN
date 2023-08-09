// Archivo principal
// Definir aplicacion de Express, middelwares, config Rutas y arrancar Servidor

import express from "express";
import mongoose from "mongoose";
import cors from"cors";
import dotenv from "dotenv";

import userRouter from "./routes/index.mjs"

dotenv.config();
const app = express();
const {PORT, MONGO_URI} = process.env;

mongoose.connect( MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión a la base de datos establecida.');
})
.catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () =>
  console.log(`App listening on PORT ${PORT}`)
);