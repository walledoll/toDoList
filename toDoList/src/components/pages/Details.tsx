import { useState } from 'react';
import TaskDetails from '../TaskDetails'
import { useTaskContext } from '../hooks/useTaskContext'
import { useNavigate, useParams } from 'react-router-dom';
import type { Task } from '@/entities/Task';

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const taskId = Number(id); // т.к. у тебя id типа number

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
      updateTask(currentTask); // Обновляем задачу в контексте
      navigate('/'); // Возвращаемся обратно
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (!currentTask) {
    return <div>Задача не найдена</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Редактировать задачу</h1>
      <TaskDetails
        {...currentTask}
        onChange={handleChange} // добавь onChange в props TaskDetails
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}
