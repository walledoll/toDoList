export enum Category{
    Bug = "Bug",
    Feature = "Feature",
    Documentation = "Documentation",
    Refactor = "Refactor", 
    Test = "Test"
}; 

export enum Status{
    ToDo = "To Do",
    InProgress = "In Progress",
    Done = "Done"
};

export enum Priority{
    Low = "Low",
    Medium = "Medium",
    High = "High"
};

export interface Task{
    id: number;
    name: string;
    content: string;
    category: Category;
    status: Status;
    priority: Priority;
}