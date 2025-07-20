import express, { Router } from 'express';
import { Category, Priority, Status, Task } from '../entities/types.ts';

let tasks:Task[] = [
    {
        id: 1,
        name: "Context api",
        content: "Make global store using context api",
        category: Category.Feature,
        status: Status.InProgress,
        priority: Priority.Medium
    },
    {
        id: 2,
        name: "Themes",
        content: "Add light and dark themes",
        category: Category.Feature,
        status: Status.InProgress,
        priority: Priority.High
    },
    {
        id: 3,
        name: "Social media",
        content: "Make home page of social media",
        category: Category.Feature,
        status: Status.ToDo,
        priority: Priority.Low
    },
    {
        id: 4,
        name: "Zustand",
        content: "Add zustand support to task manager",
        category: Category.Feature,
        status: Status.ToDo,
        priority: Priority.Low
    },
    {
        id: 5,
        name: "Test task",
        content: "Test task content",
        category: Category.Test,
        status: Status.Done,
        priority: Priority.Low
    },
];

const router: Router = express.Router();

router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.get('/tasks/:id', (req, res)=>{
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);
    res.json(task);
});

router.delete('tasks/:id', (req, res) =>{
    const id = Number(req.params.id);

    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    if(tasks.length < initialLength) {
        res.status(204).send();
    }
    else {
        res.status(404).send('Item not found');
    }
});

router.patch('/tasks/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const updatedFields: Partial<Task> = req.body;
    const task = tasks.find(task => task.id === id);
    res.json({...task, ...updatedFields});
});

router.post('/tasks', (req, res)=>{
    const newTask = req.body;
    tasks = {...tasks, ...newTask};
    res.status(201).json({message: 'Task created', task: newTask});
})

export default router;
