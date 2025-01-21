import express from "express";
import { createHabit,deleteHabit,trackHabitDate } from "../controllers/habits/createHabit.js";

const router = express.Router();


router.post("/create",createHabit) // name, goalType, userId por body
router.delete("/delete/:habitId",deleteHabit) //habit id por params
router.patch("/addTrack/:habitId",trackHabitDate) //habit id por params


const test = (req , res) => {
  console.log("ruta de test");
  return res.status(200).json({ message: 'ruta probada con exito' });
};

router.get("/test", test);

export default router;
