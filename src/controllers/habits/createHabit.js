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

export const deleteHabit = async (req, res) => {
  const { habitId } = req.params;

  try {
    const habit = await prisma.habit.findUnique({
      where: {
        id: habitId,
      },
    });

    if (!habit) {
      return res.status(404).json({ error: "Hábito no encontrado." });
    }

    await prisma.habit.delete({
      where: {
        id: habitId,
      },
    });

    return res.status(200).json({ message: "Hábito eliminado con éxito." });
  } catch (error) {
    console.error("Error al borrar el hábito:", error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};

export const trackHabitDate = async (req, res) => {
  const { habitId } = req.params;

  try {
    const habit = await prisma.habit.findUnique({
      where: {
        id: habitId,
      },
    });

    if (!habit) {
      return res.status(404).json({ error: "Hábito no encontrado." });
    }

    const currentDate = new Date();

    // Evitar agregar la misma fecha dos veces
    if (habit.datesTracked.some(date => new Date(date).toDateString() === currentDate.toDateString())) {
      return res.status(400).json({ error: "La fecha actual ya está registrada para este hábito." });
    }

    const updatedHabit = await prisma.habit.update({
      where: {
        id: habitId,
      },
      data: {
        datesTracked: {
          push: currentDate,
        },
      },
    });

    return res.status(200).json(updatedHabit);
  } catch (error) {
    console.error("Error al rastrear la fecha del hábito:", error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
