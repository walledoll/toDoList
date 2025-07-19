import { Task } from '@/entities/task/model/Task';
import { Category, Priority, Status } from '@/shared/types';
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface TaskStoreProps{
    tasks: Task[];
    updateTask: (updatedTask: Task) => void;
    addTask: (addedTask: Task) => void;
    deleteTask: (id: number) => void;
}

export const useTaskStore = create<TaskStoreProps>()(
  persist(
    (set) => ({
      tasks: [
        {
            id: 1,
            name: "Context api",
            content: "Make global store using context api",
            category: Category.Feature,
            status: Status.InProgress,
            priority: Priority.Medium
        },
        {
            id: 2,
            name: "Themes",
            content: "Add light and dark themes",
            category: Category.Feature,
            status: Status.InProgress,
            priority: Priority.High
        },
        {
            id: 3,
            name: "Social media",
            content: "Make home page of social media",
            category: Category.Feature,
            status: Status.ToDo,
            priority: Priority.Low
        },
        {
            id: 4,
            name: "Zustand",
            content: "Add zustand support to task manager",
            category: Category.Feature,
            status: Status.ToDo,
            priority: Priority.Low
        },
        {
            id: 5,
            name: "Test task",
            content: "Test task content",
            category: Category.Test,
            status: Status.Done,
            priority: Priority.Low
        },
    ],
      updateTask: (updatedTask: Task) =>
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)),
        })),
      addTask: (newTask) =>
        set((state) => ({
          tasks: [...state.tasks, { ...newTask, id: Date.now() }],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);