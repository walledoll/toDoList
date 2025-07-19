import { Category, Priority, Status } from "@/shared/types";


export type Task = {
    id: number;
    name: string;
    content: string;
    category: Category;
    status: Status;
    priority: Priority;
}