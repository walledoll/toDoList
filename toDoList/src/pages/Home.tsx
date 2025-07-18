import TaskList from "@/widgets/TaskList";
import { useTaskStore} from "@/app/store/taskStore"


export default function Home() {
  const tasks= useTaskStore((state) => state.tasks);
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
