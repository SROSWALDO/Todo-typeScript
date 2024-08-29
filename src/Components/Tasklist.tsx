import { Task } from "../Interfaces/Task"
import TaskCard from "./TaskCard"

interface TaskProps {
    tasks: Task[];
    deleteTask: (id: number) => void
}

export default function Tasklist({ tasks, deleteTask }:TaskProps) {
  return (
    <ul className="todo-list mt-16 ">
      {tasks.map(task => (
          <li style={{ listStyle: 'none', padding: '5px' }} key={task.id}>
            <TaskCard deleteTask={deleteTask} key={task.id} task={task} />
          </li>
        ))}
    </ul>
  )
}
