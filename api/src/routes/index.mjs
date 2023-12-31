import express from "express";

import { createUser, getUserByMail } from "../controllers/index.mjs";

const router = express.Router();

router.get("/get-user", getUserByMail)

router.post("/create-user", createUser);

export default router;