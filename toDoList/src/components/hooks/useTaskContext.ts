import { type Task } from "@/entities/Task";
import { createContext, useContext } from "react";

interface TaskContextProps{
    tasks: Task[];
    updateTask: (updatedTask: Task) => void;
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);



export function useTaskContext(){
    const task = useContext(TaskContext);
    if(task === undefined)
        throw new Error("Use within provider");
    return task;
}