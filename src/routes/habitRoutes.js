import express from "express";
import { createHabit } from "../controllers/habits/createHabit.js";

const router = express.Router();


router.post("/create",createHabit)




const test = (req , res) => {
  console.log("ruta de test");
  return res.status(200).json({ message: 'ruta probada con exito' });
};

router.get("/test", test);

export default router;
