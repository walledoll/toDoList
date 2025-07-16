import TaskList from '../TaskList'
import { useTaskContext } from '../hooks/useTaskContext'

export default function Home() {
  const { tasks } = useTaskContext();
  return (
    <div>
      <header className='flex justify-center items-center my-[2em] text-[1.1em]'>
          Task Manager
      </header>
      <main>
          <TaskList tasks={tasks}/>
      </main>
    </div>
  )
}
