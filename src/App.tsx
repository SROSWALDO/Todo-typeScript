import { useState } from "react";
import "./App.css";
import { Task } from "./Interfaces/Task";
import Tasklist from "./Components/Tasklist";



function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "learn React",
      description: "learn React",
      completed: false,
    },
    {
      id:2,
      title: "come bollo",
      description: "pamela chup",
      completed:false
    }
  ]);

  return (
    <>
      <div className="todoapp">
        <Tasklist tasks={tasks} />
      </div>
    </>
  );
}

export default App;
