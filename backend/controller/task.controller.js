import { db } from "../database/data.js";

export const getAllTasks = async (req, res) => {
    try {
        const response = await db.tasks.map((task) => {
            return {
                id: task.id,
                user: task.user,
                task: task.task,
            };
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const TaskId = req.params;
        const response = await db.tasks.find((task) => task.id === parseInt(TaskId.id));
        if (!response) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    try{
        const { user, task } = req.body;
        const newTask = {
            id: db.taskCounter++,
            user,
            task,
        };

        if(newTask.id == null || newTask.user == null || newTask.task == null){
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        const existingTask = await db.tasks.find((task) => task.id === newTask.id);
        if (existingTask) {
            return res.status(400).json({ message: "Task already exists" });
        }
        await db.tasks.push(newTask);
        res.status(201).json(newTask);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        const { user, task } = req.body;
        const existingTask = await db.tasks.find((task) => task.id === parseInt(taskId));
        if (!existingTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        if (user) existingTask.user = user;
        if (task) existingTask.task = task;
        res.status(200).json(existingTask);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        const response = await db.tasks.find((task) => task.id === parseInt(taskId));
        if (!response) {
            res.status(404).json({ message: "Task not found" });
            return;
        }
        await db.tasks.splice(taskId-1,1);
        await db.taskCounter--;
        res.status(200).json({ message: "Task deleted successfully" });
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};