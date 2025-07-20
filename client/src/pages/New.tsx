import { useTasks, useUpdateTask } from '@/app/hooks/useTasks';
import { Task } from '@/entities/task/model/Task';
import NewTask from '@/widgets/NewTask';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function () {
    const navigate = useNavigate();
    const { id } = useParams();
    const taskId = Number(id);
     const { data: tasks, isLoading, error } = useTasks();
    const updateTask = useUpdateTask();
     if (error || !tasks) return <div>Ошибка загрузки задач</div>;
    const task = tasks.find((task) => task.id === taskId);
    if (isLoading) return <div>Загрузка задач...</div>;

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

    return (
        <div>
            <header className="flex justify-center items-center my-[2em] text-[1.1em]">
                New Task
            </header>
            <NewTask
                onCancel={handleCancel}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
}
