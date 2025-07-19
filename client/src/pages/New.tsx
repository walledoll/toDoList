import { useTaskStore } from '@/app/store/taskStore';
import { Task } from '@/entities/task/model/Task';
import { Category, Priority, Status } from '@/shared/types';
import NewTask from '@/widgets/NewTask';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate();
    const addTask = useTaskStore((state) => state.addTask);
    const [currentTask, setCurrentTask] = useState<Task | null>({
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
        if (currentTask) {
            const newTask = { ...currentTask, ...updatedField };
            setCurrentTask(newTask);
        }
    };

    const handleSubmit = () => {
        if (currentTask) {
            addTask(currentTask);
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
