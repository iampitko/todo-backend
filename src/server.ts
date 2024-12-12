import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.post("/tasks", async (req, res) => {
  const { title, color } = req.body;

  if (!title || !color) {
    return res.status(400).json({ error: "Title and color are required" });
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        color,
        completed: false,
      },
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
});

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    if (!title && !color && completed === undefined) {
      return res
        .status(400)
        .json({
          error:
            "At least one field (title, color, completed) is required to update.",
        });
    }

    const updatedData: any = {};
    if (title) updatedData.title = title;
    if (color) updatedData.color = color;
    if (completed !== undefined) updatedData.completed = completed;

    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: updatedData,
    });

    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update task" });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
