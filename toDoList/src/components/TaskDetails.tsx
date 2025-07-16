import { Card } from './ui/card'
import { Input } from './ui/input'
import { Select, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectContent } from './ui/select';
import { Category, Priority, Status, type Task } from '@/entities/Task';
import { Label } from './ui/label';
import { Button } from './ui/button';
import type { ChangeEvent } from 'react';

interface TaskDetailsProps extends Task {
    onChange: (updatedField: Partial<Task>) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function TaskDetails({name, content, category, status, priority, onChange, onSubmit, onCancel}: TaskDetailsProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name: filedName, value} = e.target;
    onChange({[filedName]: value})
  }
  return (
    <Card className='mx-5'>
        <form className='grid gap-3' onSubmit={(e) => e.preventDefault()}>
            <div className='grid md:grid-cols-2  gap-5 mx-3'>
                <div>
                    <Label>Name</Label>
                    <Input name="name" onChange={handleChange} type="text" value={name}/>
                </div>
                <div>
                    <Label>Content</Label>
                    <Input onChange={handleChange} type="text" name="content" value={content}/>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mx-3'>
                <div>
                    <Label>Select a category</Label>
                    <Select onValueChange={(value) => onChange({category: value as Category})} defaultValue={category}>
                        <SelectTrigger className="w-[15em]">
                            <SelectValue/>
                        </SelectTrigger>

                        <SelectContent >
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                {Object.values(Category).map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                        {cat}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>Select a status</Label>
                    <Select onValueChange={(value) => onChange({ status: value as Status })}  defaultValue={status}>
                        <SelectTrigger className="w-[15em]">
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent >
                            <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                {Object.values(Status).map((stat) => (
                                    <SelectItem key={stat} value={stat}>
                                    {stat}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                
                <div>
                    <Label>Select a priority</Label>
                    <Select onValueChange={(value) => onChange({ priority: value as Priority })}  defaultValue={priority}>
                        <SelectTrigger className="w-[15em]">
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent >
                            <SelectGroup>
                                <SelectLabel>Priority</SelectLabel>
                                {Object.values(Priority).map((pr) => (
                                    <SelectItem key={pr} value={pr}>
                                    {pr}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                
            </div>
            <div className='flex justify-between mx-3'>
                <Button className='dark' onClick={onCancel}>Cancel</Button>
                <Button onClick={onSubmit}>Save</Button>
            </div>
        </form>
    </Card> 
  )
}
