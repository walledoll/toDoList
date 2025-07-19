import { ChangeEvent } from 'react'
import { Card } from '../shared/ui/card'
import { Input } from '../shared/ui/input'
import { Select, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectContent } from '../shared/ui/select'
import { Label } from '../shared/ui/label'
import { Button } from '../shared/ui/button'
import { Category, Priority, Status } from '@/shared/types'
import { Task } from '@/entities/task/model/Task'

interface NewTaskProps{
    onChange: (updatedField: Partial<Task>) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function NewTask({onChange, onCancel, onSubmit}: NewTaskProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name: filedName, value } = e.target;
    onChange({ [filedName]: value })
  }
  return (
    <Card className='mx-5'>
        <form className='grid gap-3' onSubmit={(e) => e.preventDefault()}>
            <div className='grid md:grid-cols-2  gap-5 mx-3'>
                <div>
                    <Label>Name</Label>
                    <Input name="name" onChange={handleChange} type="text" required/>
                </div>
                <div>
                    <Label aria-required>Content
                        <Input onChange={handleChange} type="text" name="content" required/>
                    </Label>
                    
                </div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mx-3'>
                <div>
                    <Label>Select a category</Label>
                    <Select onValueChange={(value) => onChange({ category: value as Category })} required>
                        <SelectTrigger className="w-[15em]">
                            <SelectValue />
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
                    <Select onValueChange={(value) => onChange({ status: value as Status })}>
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
                    <Select onValueChange={(value) => onChange({ priority: value as Priority })}>
                        <SelectTrigger className="w-[15em]">
                            <div className='flex justify-center items-center bg-[#777] text-white gap-1 rounded-[5px]'>
                                    <SelectValue />
                                   
                            </div>
                            
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
                <Button className='bg-[#777] text' onClick={onCancel}>Cancel</Button>
                <Button onClick={onSubmit}>Save</Button>
            </div>
        </form>
    </Card>
  )
}
