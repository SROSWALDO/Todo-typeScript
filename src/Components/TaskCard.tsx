import { Task } from "../Interfaces/Task";

interface TaskProps {
  task: Task;
  deleteTask: (id: number) => void
}

export default function TaskCard({ task, deleteTask }: TaskProps) {
  return (
    <div className="p-4 flex justify-between bg-white shadow-slate-50 shadow-md border w-[500px] rounded-lg mb-2 items-center ">
      <div className="flex items-center " >
        <div>
          <input className="w-4 h-4 rounded-full " type="checkbox" />
        </div>
        <div className="ml-4" >
          <h2 className="text-blue-700 font-semibold text-lg " >{task.title.charAt(0).toUpperCase() + task.title.slice(1)}</h2>
          <p>{task.description}</p>
          
        </div>
      </div>
      <button onClick={() => task.id && deleteTask(task.id)} className="bg-red-600 text-white px-2 rounded-lg h-8 " >Delete</button>
    </div>
  );
}
