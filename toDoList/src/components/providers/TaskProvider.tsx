import { Category, Priority, Status, type Task } from "@/entities/Task"
import { useState, type FC, type ReactNode } from "react"
import { TaskContext } from "../hooks/useTaskContext"

export const TaskProvider: FC<{children: ReactNode}> = ({children}) =>{
    const [tasks, setTasks] = useState<Task[]>([
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
    ])

    const updateTask =(updatedTask: Task) =>{
        setTasks((prevTasks) =>
            prevTasks.map((task) =>(task.id === updatedTask.id ? updatedTask : task))
        )
    }
    return <TaskContext.Provider value={{tasks, updateTask}}>{children}</TaskContext.Provider>
}