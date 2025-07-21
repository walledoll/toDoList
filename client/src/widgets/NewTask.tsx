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
}

export default function NewTask({
    onChange,
    onCancel,
    onSubmit,
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
        const { name, value } = e.target;
        const updatedTask = { ...task, [name]: value };
        setTask(updatedTask);
        onChange(updatedTask);
    };

    const handleSelectChange = (field: string, value: string) => {
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
            onSubmit();
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
                            value={task.name || ''}
                        />
                        {renderError(task.name, 'name')}
                    </div>
                    <div>
                        <Label>Content</Label>
                        <Input
                            name="content"
                            onChange={handleChange}
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
                    <Button className="bg-[#777]" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </Card>
    );
}