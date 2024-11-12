'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Checkbox } from "../ui/checkbox"
import { Button } from "@/components/ui/button"
import { ChevronRight, Settings, Plus } from 'lucide-react'

interface Task {
  id: string
  title: string
  total: number
  completed: number
}

interface TimeSection {
  title: string
  tasks: Task[]
}

export default function CheckList() {
  const [sections, setSections] = useState<TimeSection[]>([
    {
      title: "4 months to go",
      tasks: [
        { id: "1", title: "Find Your Venues", completed: 0, total: 4 },
        { id: "2", title: "Start Planning Your Guest List", completed: 0, total: 2 },
        { id: "3", title: "Set A Budget", completed: 0, total: 3 },
        { id: "4", title: "Make Your Venue Choice", completed: 0, total: 3 },
        { id: "5", title: "Do Right by the Eyes of the Law", completed: 0, total: 4 },
        { id: "6", title: "Book Your Venue", completed: 0, total: 6 },
        { id: "7", title: "Gather Your Wedding Party", completed: 0, total: 3 },
        { id: "8", title: "Send Out Your Invitations", completed: 0, total: 4 },
        { id: "9", title: "Find A Wedding Photographer or Videographer", completed: 0, total: 3 },
        { id: "10", title: "Get All Dressed In White", completed: 0, total: 5 },
        { id: "11", title: "Food, Glorious Food", completed: 0, total: 3 },
      ]
    },
    {
      title: "3 months to go",
      tasks: [
        { id: "12", title: "Find A Florist", completed: 0, total: 4 },
      ]
    }
  ])

  const [expandedTasks, setExpandedTasks] = useState<string[]>([]);

  const toggleTaskExpansion = (taskId: string) => {
    setExpandedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 ]">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-center mb-4">Wedding Checklist</h1>
        <p className="text-center text-gray-600 mb-6">
          This is your personal to-do list. Add, remove, or complete any task and keep on top of your
          deadlines. Any changes? Just click to edit.
        </p>
        
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1">
            <h2 className="text-lg font-medium">Wedding Date: <span className="text-purple-600 border-b border-purple-600">Set the day you say I DO</span></h2>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">{section.title}</h3>
            <Button variant="ghost" size="sm" className="text-purple-600">
              <Plus className="h-4 w-4 mr-2" />
              Add task
            </Button>
          </div>

          <div className="space-y-2">
            {section.tasks.map((task) => (
              <div key={task.id}>
                <Card 
                  className={`flex flex-col cursor-pointer transition-all duration-200 ease-in-out ${
                    expandedTasks.includes(task.id) ? 'h-auto' : 'h-12'
                  }`}
                >
                  <div className="flex items-center p-2 hover:bg-gray-50">
                    <Checkbox className="h-5 w-5 mr-4 border-2" />
                    <span className="flex-1">{task.title}</span>
                    <span className="text-gray-500 mr-2">{task.completed}/{task.total}</span>
                    <ChevronRight 
                      className={`h-5 w-5 text-gray-400 transition-transform ${expandedTasks.includes(task.id) ? 'rotate-90' : ''}`} 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTaskExpansion(task.id);
                      }}
                    />
                  </div>
                  {expandedTasks.includes(task.id) && (
                    <div className="px-4 py-2 text-sm text-gray-600">
                      <p>Expanded details for {task.title}</p>
                      <p>You can add more detailed information or subtasks here.</p>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>

          {index === 0 && (
            <div className="flex justify-center mt-4">
              <span className="text-purple-600">***</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}