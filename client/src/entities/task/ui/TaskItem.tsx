import { Badge } from '../../../shared/ui/badge';
import { Button } from '../../../shared/ui/button';
import { Task } from '@/entities/task/model/Task';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '../../../shared/ui/card';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import { X } from 'lucide-react';
import { Bug } from 'lucide-react';
import { Feather } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { FlaskConical } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Category, Priority, Status } from '@/shared/types';
import { useDeleteTask } from '@/app/hooks/useTasks';

export default function TaskItem(task: Task) {
    const navigate = useNavigate();
    const deleteTask = useDeleteTask();
    const { id } = task;

    const handleClick = () => {
        navigate(`/task/${task.id}`);
    };

    const handleDeleteClick = () => {
        deleteTask.mutate(id);
    };
    const renderCategory = () => {
        switch (task.category) {
            case Category.Bug:
                return (
                    <Badge>
                        <Bug />
                        {Category.Bug}
                    </Badge>
                );
            case Category.Feature:
                return (
                    <Badge>
                        <Feather />
                        {Category.Feature}
                    </Badge>
                );
            case Category.Documentation:
                return (
                    <Badge>
                        <StickyNote />
                        {Category.Documentation}
                    </Badge>
                );
            case Category.Refactor:
                return (
                    <Badge>
                        <CodeXml />
                        {Category.Refactor}
                    </Badge>
                );
            case Category.Test:
                return (
                    <Badge>
                        <FlaskConical />
                        {Category.Test}
                    </Badge>
                );
        }
    };

    const renderStatus = () => {
        switch (task.status) {
            case Status.Done:
                return (
                    <Badge>
                        <Check />
                        {Status.Done}
                    </Badge>
                );
            case Status.InProgress:
                return (
                    <Badge>
                        <RefreshCw />
                        {Status.InProgress}
                    </Badge>
                );
            case Status.ToDo:
                return (
                    <Badge>
                        <X />
                        {Status.ToDo}
                    </Badge>
                );
        }
    };

    const renderPriority = () => {
        switch (task.priority) {
            case Priority.High:
                return (
                    <Badge className="bg-red-500">
                        <div>!!!</div>
                        {Priority.High}
                    </Badge>
                );
            case Priority.Medium:
                return (
                    <Badge className="bg-yellow-500">
                        <div>!!</div>
                        {Priority.Medium}
                    </Badge>
                );
            case Priority.Low:
                return (
                    <Badge className="bg-green-500">
                        <div>!</div>
                        {Priority.Low}
                    </Badge>
                );
        }
    };

    return (
        <Card className="px-3">
            <CardTitle className="flex justify-between items-center">
                {task.name}
                <Button variant="destructive" onClick={handleDeleteClick}>
                    <Trash />
                </Button>
            </CardTitle>
            <CardDescription>
                <p>{task.content}</p>
            </CardDescription>
            <CardContent className="flex px-[-3em] gap-3">
                {renderCategory()}
                {renderStatus()}
                {renderPriority()}
            </CardContent>

            <Button onClick={handleClick}>Edit</Button>
        </Card>
    );
}
