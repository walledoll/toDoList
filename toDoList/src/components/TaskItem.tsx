import { Badge } from './ui/badge'
import { Button } from './ui/button'
import type { Task } from '@/types/Task'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'

export default function TaskItem(task: Task) {
  const renderCategory = () =>{
    switch(task.category){
        case "Test": 
            return <Badge className='bg'/>
    }
  }
  return (
    <Card>
        <CardTitle>
            {task.name}
        </CardTitle>
        <CardDescription>
            <p>{task.content}</p>
        </CardDescription>
        <CardContent className='flex '>
            <Badge variant="secondary">{task.category}</Badge>
            <Badge>{task.status}</Badge>
            <Badge>{task.priority}</Badge>
        </CardContent>
        
        <Button>Редактировать</Button>
    </Card>
  )
}
