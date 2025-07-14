import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import TaskItem from "./components/TaskItem"
import type { Task } from "./types/Task"

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

function App() {
  const task1: Task = {
    name: "Test task",
    content: "Test task content",
    category: Category.Test,
    status: Status.Done,
    priority: Priority.Low
  }
  return (
    <>
      <div className="h-[5em] flex justify-center items-center">
        <h1 >Task Manager</h1>
      </div>
      <Select>

      </Select>
      <TaskItem {...task1}></TaskItem>
      <TaskItem {...task1}></TaskItem>
      <TaskItem {...task1}></TaskItem>
      <TaskItem {...task1}></TaskItem>
    </>
  )
}

export default App

