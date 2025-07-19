import TaskList from "@/widgets/TaskList";
import { useTaskStore} from "@/app/store/taskStore"
import { Button } from "@/shared/ui/button";
import { Plus } from 'lucide-react';
import { useNavigate } from "react-router-dom";


export default function Home() {
  const tasks= useTaskStore((state) => state.tasks);
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate('/task/new');
  }
  return (
    <div>
      <header className='flex justify-center items-center my-[2em] text-[1.1em]'>
        Task Manager
      </header>
      <main>
        <TaskList tasks={tasks}/>
        <Button onClick={handleAddTask}className="fixed top-[80vh] left-[70vw] sm:left-[85vw] sm:top-[85vh] lg:left-[90vw] rounded-4xl size-20 bg-[#777]"><Plus/></Button>
      </main>
    </div>
  )
}
