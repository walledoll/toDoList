import { Badge } from '../../../shared/ui/badge'
import { Button } from '../../../shared/ui/button'
import { type Task } from '@/entities/task/model/Task'
import { FaFire } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import { RiProgress1Line } from "react-icons/ri";
import { MdRemoveDone } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { FaFeatherAlt } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { Card, CardContent, CardDescription, CardTitle } from '../../../shared/ui/card'
import { useNavigate } from 'react-router-dom';

export default function TaskItem(task: Task) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/task/${task.id}`);
  }
  const renderCategory = () => {
    switch (task.category) {
      case "Bug":
        return <Badge><FaBug />Bug</Badge>
      case "Feature":
        return <Badge><FaFeatherAlt />Feature</Badge>
      case "Documentation":
        return <Badge><IoMdDocument />Documentation</Badge>
      case "Refactor":
        return <Badge><FaFlagCheckered />Refactor</Badge>
      case "Test":
        return <Badge><GrTest />Test</Badge>
    }
  }

  const renderStatus = () => {
    switch (task.status) {
      case "Done":
        return <Badge ><IoIosDoneAll />Done</Badge>
      case "In Progress":
        return <Badge ><RiProgress1Line />In Progress</Badge>
      case "To Do":
        return <Badge><MdRemoveDone />To Do</Badge>
    }
  }

  const renderPriority = () => {
    switch (task.priority) {
      case "High":
        return <Badge className='bg-red-500'><FaFire />High</Badge>
      case "Medium":
        return <Badge className='bg-yellow-500'>Medium</Badge>
      case "Low":
        return <Badge className='bg-green-500'>Low</Badge>
    }
  }

  return (
    <Card className='px-3'>
      <CardTitle>
        {task.name}
      </CardTitle>
      <CardDescription>
        <p>{task.content}</p>
      </CardDescription>
      <CardContent className='flex px-[-3em] gap-3'>
        {renderCategory()}
        {renderStatus()}
        {renderPriority()}
      </CardContent>

      <Button onClick={handleClick}>Edit</Button>
    </Card>
  )
}
