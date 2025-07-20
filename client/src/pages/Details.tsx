import { useDeleteTask, useTasks, useUpdateTask } from '@/app/hooks/useTasks';
import { Task } from '@/entities/task/model/Task';
import TaskDetails from '@/widgets/TaskDetails';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Details() {
    const navigate = useNavigate();
    const { id } = useParams();
    const taskId = Number(id);
    const { data: tasks, isLoading, error } = useTasks();
    const deleteTask = useDeleteTask();
    const updateTask = useUpdateTask();
    if (error) return <div>Can not get task of id {id}</div>;
    if (isLoading  || !tasks) return <div>Loading...</div>;
    const task = tasks.find((task) => task.id === taskId);
  
   

    const [currentTask, setCurrentTask] = useState<Task | null>(task || null);

    const handleCancel = () => {
        navigate('/');
    };

    const handleChange = (updatedField: Partial<Task>) => {
        if (currentTask) {
            const newTask = { ...currentTask, ...updatedField };
            setCurrentTask(newTask);
        }
    };

    const handleSubmit = () => {
        if (currentTask) {
            updateTask.mutate(currentTask);
            navigate('/');
        }
    };

    const handleDelete = () => {
        if (currentTask) {
            deleteTask.mutate(taskId);
            navigate('/');
        }
    };

    if (!currentTask || !taskId) {
        return <div>Task not found</div>;
    }

    return (
        <div>
            <h1 className="flex justify-center items-center my-[2em] text-[1.1em]">
                Details
            </h1>
            <TaskDetails
                {...currentTask}
                onCancel={handleCancel}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onDelete={handleDelete}
            />
        </div>
    );
}
