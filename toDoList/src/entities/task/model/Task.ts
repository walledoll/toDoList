import type { Category, Priority, Status } from "@/shared/types";


export interface Task{
    id: number;
    name: string;
    content: string;
    category: Category;
    status: Status;
    priority: Priority;
}