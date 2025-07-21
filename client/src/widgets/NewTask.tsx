import { ChangeEvent, useState } from 'react';
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
import { Category, Priority, Status } from '@/shared/types';
import { Task } from '@/entities/task/model/Task';

interface NewTaskProps {
    onChange: (updatedField: Partial<Task>) => void;
    onSubmit: () => void;
    onCancel: () => void;
    onError?: () => void;
}

export default function NewTask({
    onChange,
    onCancel,
    onSubmit,
    onError
}: NewTaskProps) {
    const [task, setTask] = useState<Partial<Task>>({
        name: '',
        content: '',
        category: undefined,
        status: undefined,
        priority: undefined,
    });
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name: fieldName, value } = e.target;
        setTask((prev) => {
            const updatedTask = { ...prev, [fieldName]: value };
            onChange(updatedTask);
            return updatedTask;
        });
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

    const renderError = (value: string, itemName: string) => {
        if (!value) {
            return <div className="text-red-700">Task {itemName} is required</div>;
        }
        return null;    
    };  

    return (
        <Card className="mx-5">
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2  gap-5 mx-3">
                    <div>
                        <Label>Name</Label>
                        <Input
                            name="name"
                            onChange={handleChange}
                            type="text"
                            value = {task.name || ''}
                            required
                        />
                        {renderError(task.name || '', 'name')}
                    </div>
                    <div>
                        <Label htmlFor="content">Content</Label>
                        <Input
                            onChange={handleChange}
                            type="text"
                            name="content"
                            value = {task.name || ''}
                            required
                        />
                        {renderError(task.content || '', 'content')}
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mx-3">
                    <div>
                        <Label>Select a category</Label>
                        <Select
                            onValueChange={(value) =>
                                onChange({ category: value as Category })
                            }
                            value = {task.name || ''}
                            required
                        >
                            <SelectTrigger className="w-[15em]" >
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Category</SelectLabel>
                                    {renderSelectItem(Category)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {renderError(task.category || '', 'category')}
                    </div>
                    <div>
                        <Label>Select a status</Label>
                        <Select
                            onValueChange={(value) =>
                                onChange({ status: value as Status })
                            }
                            required
                            value = {task.name || ''}
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
                        {renderError(task.status || '', 'status')}
                    </div>

                    <div>
                        <Label>Select a priority</Label>
                        <Select
                            onValueChange={(value) =>
                                onChange({ priority: value as Priority })
                            }
                            required
                            value = {task.name || ''}
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
                        {renderError(task.priority || '', 'priority')}
                    </div>
                </div>
                <div className="flex justify-between mx-3">
                    <Button className="bg-[#777] text" onClick={() => {onCancel;   console.log('Клик по кнопке Save');}}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit} type='submit'>Save</Button>
                </div>
            </form>
        </Card>
    );
}
