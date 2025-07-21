import { Card } from '../shared/ui/card';
import { Input } from '../shared/ui/input';
import {
    Select,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectContent,
} from '../shared/ui/select';
import { Label } from '../shared/ui/label';
import { Button } from '../shared/ui/button';
import { useState, type ChangeEvent } from 'react';
import type { Task } from '@/entities/task/model/Task';
import { Trash } from 'lucide-react';
import { Category, Priority, Status } from '@/shared/types';

interface TaskDetailsProps extends Task {
    onChange: (updatedField: Partial<Task>) => void;
    onSubmit: (task: Task) => void;
    onCancel: () => void;
    onDelete: () => void;
}

export default function TaskDetails({
    name,
    content,
    category,
    status,
    priority,
    onChange,
    onSubmit,
    onCancel,
    onDelete,
}: TaskDetailsProps) {
    const [task, setTask] = useState<Partial<Task>>({
        name,
        content,
        category,
        status,
        priority,
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name: fieldName, value } = e.target;
        const updatedTask = { ...task, [fieldName]: value };
        setTask(updatedTask);
        onChange(updatedTask);
    };

    const handleSelectChange = (field: keyof Task, value: string) => {
        const updatedTask = { ...task, [field]: value };
        setTask(updatedTask);
        onChange(updatedTask);
    };

    const validateForm = () => {
        return (
            task.name &&
            task.content &&
            task.category &&
            task.status &&
            task.priority
        );
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit(task as Task);
        }
    };

    const renderError = (value: string | undefined, itemName: string) => {
        return !value ? (
            <div className="text-red-700">Task {itemName} is required</div>
        ) : null;
    };

    const renderSelectItem = (
        item: typeof Category | typeof Status | typeof Priority,
    ) => {
        return Object.values(item).map((cat) => (
            <SelectItem key={cat} value={cat}>
                {cat}
            </SelectItem>
        ));
    };

    return (
        <Card className="mx-5">
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5 mx-3">
                    <div>
                        <Label>Name</Label>
                        <Input
                            name="name"
                            onChange={handleChange}
                            type="text"
                            value={task.name || ''}
                        />
                        {renderError(task.name, 'name')}
                    </div>
                    <div>
                        <Label>Content</Label>
                        <Input
                            onChange={handleChange}
                            type="text"
                            name="content"
                            value={task.content || ''}
                        />
                        {renderError(task.content, 'content')}
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mx-3">
                    <div>
                        <Label>Select a category</Label>
                        <Select
                            onValueChange={(value) =>
                                handleSelectChange('category', value)
                            }
                            value={task.category}
                        >
                            <SelectTrigger className="w-[15em]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Category</SelectLabel>
                                    {renderSelectItem(Category)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {renderError(task.category, 'category')}
                    </div>
                    <div>
                        <Label>Select a status</Label>
                        <Select
                            onValueChange={(value) =>
                                handleSelectChange('status', value)
                            }
                            value={task.status}
                        >
                            <SelectTrigger className="w-[15em]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    {renderSelectItem(Status)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {renderError(task.status, 'status')}
                    </div>
                    <div>
                        <Label>Select a priority</Label>
                        <Select
                            onValueChange={(value) =>
                                handleSelectChange('priority', value)
                            }
                            value={task.priority}
                        >
                            <SelectTrigger className="w-[15em]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Priority</SelectLabel>
                                    {renderSelectItem(Priority)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {renderError(task.priority, 'priority')}
                    </div>
                </div>
                <div className="flex justify-between mx-3">
                    <Button variant="destructive" onClick={onDelete}>
                        <Trash /> Delete
                    </Button>
                    <Button className="bg-[#777]" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </div>
            </form>
        </Card>
    );
}