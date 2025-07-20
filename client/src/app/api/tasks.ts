import { Task } from '@/entities/task/model/Task';

const API_URL = 'https://todo-backend-7ky2.onrender.com/tasks';

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Ошибка загрузки задач');
  return res.json();
};

export const createTask = async (task: Task): Promise<Task> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error('Ошибка создания задачи');
  return res.json();
};

export const updateTask = async (task: Task): Promise<Task> => {
  const res = await fetch(`${API_URL}/${task.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error('Ошибка обновления задачи');
  return res.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Ошибка удаления задачи');
};