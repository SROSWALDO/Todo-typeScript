import { Task } from "../Interfaces/Task";

interface TaskProps {
  task: Task;
}

export default function TaskCard({ task }: TaskProps) {
  return (
    <div
      className="view"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <input className="toggle" type="checkbox" />
      <h2>{task.title.charAt(0).toUpperCase() + task.title.slice(1)}</h2>
      <p>{task.description}</p>
      <button className="destroy"></button>
    </div>
  );
}
