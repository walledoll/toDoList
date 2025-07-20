export const enum Category{
    Bug = "Bug",
    Feature = "Feature",
    Documentation = "Documentation",
    Refactor = "Refactor", 
    Test = "Test"
}; 

export const enum Status{
    ToDo = "To Do",
    InProgress = "In Progress",
    Done = "Done"
};

export const enum Priority{
    Low = "Low",
    Medium = "Medium",
    High = "High"
};

export type Task = {
    id: number;
    name: string;
    content: string;
    category: Category;
    status: Status;
    priority: Priority;
};
