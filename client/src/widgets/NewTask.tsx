import { ChangeEvent } from 'react';
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
            <form className="grid gap-3">
                <div className="grid md:grid-cols-2  gap-5 mx-3">
                    <div>
                        <Label>Name</Label>
                        <Input
                            name="name"
                            onChange={handleChange}
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="content">Content</Label>
                        <Input
                            onChange={handleChange}
                            type="text"
                            name="content"
                            required
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
                    <Button className="bg-[#777] text" onClick={() => {onCancel;   console.log('Клик по кнопке Save');}}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit}>Save</Button>
                </div>
            </form>
        </Card>
    );
}
