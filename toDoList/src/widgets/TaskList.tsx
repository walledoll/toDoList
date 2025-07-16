import type { Task } from '@/entities/task/model/Task'
import TaskItem from '../entities/task/ui/TaskItem'

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const listTasks = tasks.map(task => <TaskItem key={task.id} {...task} />)
  return (
    <div className='grid md:grid-cols-2 gap-5 lg:grid-cols-3 m-5'>
      {listTasks}
    </div>
  )
}
