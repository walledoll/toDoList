import { useState } from 'react';
import TaskDetails from '../TaskDetails'
import { useTaskContext } from '../hooks/useTaskContext'
import { useNavigate, useParams } from 'react-router-dom';
import type { Task } from '@/entities/Task';

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const taskId = Number(id);

  const { tasks, updateTask } = useTaskContext();
  const task = tasks.find((t) => t.id === taskId);

  const [currentTask, setCurrentTask] = useState<Task | null>(task || null);

  const handleChange = (updatedField: Partial<Task>) => {
    if (currentTask) {
      const newTask = { ...currentTask, ...updatedField };
      setCurrentTask(newTask);
    }
  };

  const handleSubmit = () => {
    if (currentTask) {
      updateTask(currentTask);
      navigate('/');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (!currentTask) {
    return <div>Task is not found</div>;
  }

  return (
    <div>
      <h1 className="flex justify-center items-center my-[2em] text-[1.1em]">Details</h1>
      <TaskDetails
        {...currentTask}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}
