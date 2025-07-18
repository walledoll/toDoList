import { useTaskStore } from "@/app/store/taskStore";
import { Task } from "@/entities/task/model/Task";
import TaskDetails from "@/widgets/TaskDetails";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const taskId = Number(id);
  const tasks = useTaskStore((state) => state.tasks);
  const task  = (tasks.find((task) => task.id === taskId));
  const updateTask = useTaskStore((state) => state.updateTask);
  const [currentTask, setCurrentTask] = useState<Task | null>(task || null);

  const handleCancel = () =>{
    navigate('/');
  }

  const handleChange = (updatedField: Partial<Task>) => {
    if(currentTask) {
      const newTask = {...currentTask, ...updatedField};
      setCurrentTask(newTask);
    }
  }

  const handleSubmit = () => {
    if(currentTask){
      updateTask(currentTask);
      navigate('/');
    }
  }

    if (!currentTask) {
    return <div>Task not found</div>;
  }

  return (

    <div>
      <h1 className="flex justify-center items-center my-[2em] text-[1.1em]">Details</h1>
      <TaskDetails {...currentTask} onCancel={handleCancel} onChange={handleChange} onSubmit={handleSubmit}/>
    </div>
  );
}
