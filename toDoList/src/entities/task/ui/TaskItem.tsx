import { Badge } from '../../../shared/ui/badge'
import { Button } from '../../../shared/ui/button'
import { Task } from '@/entities/task/model/Task'
import { Card, CardContent, CardDescription, CardTitle } from '../../../shared/ui/card'
import { useNavigate } from 'react-router-dom';
import { SquareCheck } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import { SquareX } from 'lucide-react';
import { Bug } from 'lucide-react';
import { Feather } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { FlaskConical } from 'lucide-react';

export default function TaskItem(task: Task) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/task/${task.id}`);
  }
  const renderCategory = () => {
    switch (task.category) {
      case "Bug":
        return <Badge><Bug />Bug</Badge>
      case "Feature":
        return <Badge><Feather />Feature</Badge>
      case "Documentation":
        return <Badge><StickyNote />Documentation</Badge>
      case "Refactor":
        return <Badge><CodeXml />Refactor</Badge>
      case "Test":
        return <Badge><FlaskConical />Test</Badge>
    }
  }

  const renderStatus = () => {
    switch (task.status) {
      case "Done":
        return <Badge ><SquareCheck />Done</Badge>
      case "In Progress":
        return <Badge ><RefreshCw />In Progress</Badge>
      case "To Do":
        return <Badge><SquareX />To Do</Badge>
    }
  }

  const renderPriority = () => {
    switch (task.priority) {
      case "High":
        return <Badge className='bg-red-500'><div>!!!</div>High</Badge>
      case "Medium":
        return <Badge className='bg-yellow-500'><div>!!</div>Medium</Badge>
      case "Low":
        return <Badge className='bg-green-500'><div>!</div>Low</Badge>
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
