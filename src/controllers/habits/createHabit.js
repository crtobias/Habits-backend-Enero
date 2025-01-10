import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createHabit = async (req, res) => {
  const { name, goalType, userId } = req.body;

  try {
    const existingHabit = await prisma.habit.findFirst({
      where: {
        name,
        userId
      },
    });

    if (existingHabit) {
        return res.status(400).json({ error: "Este hábito ya está en uso para este usuario." });
    }

    const newHabit = await prisma.habit.create({
        data: {
          name,
          goalType,
          userId,
        },
      });
  
      return res.status(201).json(newHabit);

  } catch (error) {
    console.error("Error al crear el hábito:", error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
