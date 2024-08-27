import { Task } from "../Interfaces/Task"
import TaskCard from "./TaskCard"

interface TaskProps {
    tasks: Task[]
}

export default function Tasklist({tasks}:TaskProps) {
  return (
    <ul className="todo-list ">
      {tasks.map(task => (
          <li key={task.id}>
            <TaskCard key={task.id} task={task} />
          </li>
        ))}
    </ul>
  )
}
