import { useCreateTask } from '@/app/hooks/useTasks';
import { Task } from '@/entities/task/model/Task';
import { Category, Priority, Status } from '@/shared/types';
import NewTask from '@/widgets/NewTask';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateTaskPage() {
    const navigate = useNavigate();
    const createTask = useCreateTask();

    const [currentTask, setCurrentTask] = useState<Task>({
        id: Date.now(),
        name: '',
        content: '',
        category: Category.Bug,    
        status: Status.Done,    
        priority: Priority.High, 
    });

    const handleCancel = () => {
        navigate('/');
    };

    const handleChange = (updatedField: Partial<Task>) => {
        setCurrentTask((prev) => ({ ...prev, ...updatedField }));
    };

    const handleSubmit = () => {
        if (currentTask) {
            if(!currentTask.name || !currentTask.content) {
                alert('Пожалуйста, заполните все обязательные поля');
            }          
            createTask.mutate(currentTask, {
                onSuccess: () => {
                    navigate('/');
                },
                onError: (err) => {
                    console.error('Ошибка при создании задачи', err);
                },
            });
        }
    };

    return (
        <div>
            <header className="flex justify-center items-center my-[2em] text-[1.1em]">
                Новая задача
            </header>
            <NewTask
                onCancel={handleCancel}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
}