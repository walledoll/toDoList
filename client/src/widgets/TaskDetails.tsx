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
import type { ChangeEvent } from 'react';
import type { Task } from '@/entities/task/model/Task';
import { Trash } from 'lucide-react';
import { Category, Priority, Status } from '@/shared/types';

interface TaskDetailsProps extends Task {
    onChange: (updatedField: Partial<Task>) => void;
    onSubmit: () => void;
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
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name: filedName, value } = e.target;
        onChange({ [filedName]: value });
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
                <div className="grid md:grid-cols-2  gap-5 mx-3">
                    <div>
                        <Label>Name</Label>
                        <Input
                            name="name"
                            onChange={handleChange}
                            type="text"
                            value={name}
                        />
                    </div>
                    <div>
                        <Label>Content</Label>
                        <Input
                            onChange={handleChange}
                            type="text"
                            name="content"
                            value={content}
                        />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mx-3">
                    <div>
                        <Label>Select a category</Label>
                        <Select
                            onValueChange={(value) =>
                                onChange({ category: value as Category })
                            }
                            defaultValue={category}
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
                    </div>
                    <div>
                        <Label>Select a status</Label>
                        <Select
                            onValueChange={(value) =>
                                onChange({ status: value as Status })
                            }
                            defaultValue={status}
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
                    </div>

                    <div>
                        <Label>Select a priority</Label>
                        <Select
                            onValueChange={(value) =>
                                onChange({ priority: value as Priority })
                            }
                            defaultValue={priority}
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
                    </div>
                </div>
                <div className="flex justify-between mx-3">
                    <Button variant="destructive" onClick={onDelete}>
                        <Trash /> Delete
                    </Button>
                    <Button className="bg-[#777] text" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit}>Save</Button>
                </div>
            </form>
        </Card>
    );
}
