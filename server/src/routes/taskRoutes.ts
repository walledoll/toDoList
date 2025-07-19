import express from 'express'
import { Category, Priority, Status } from '../entities/types';

export const app = express();
const tasks = [
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

app.get('/api/v1/tasks', (req, res)=>{
    res.json(tasks);
})

