enum Category{
    Bug = "Bug",
    Feature = "Feature",
    Documentation = "Documentation",
    Refactor = "Refactor", 
    Test = "Test"
}; 

enum Status{
    ToDo = "To Do",
    InProgress = "In Progress",
    Done = "Done"
};

enum Priority{
    Low = "Low",
    Medium = "Medium",
    High = "High"
};

export type Task = {
    name: string;
    content: string;
    category: Category;
    status: Status;
    priority: Priority;
}