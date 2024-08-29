import { useState } from "react";
import "./App.css";
import { Task } from "./Interfaces/Task";
import Tasklist from "./Components/Tasklist";
import Taskform from "./Components/Taskform";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Sacar la basura",
      description: "para el jueves",
      completed: false,
    },
    {
      id: 2,
      title: "Lavar mis platos",
      description: "platos, vasos, tenedores",
      completed: false,
    },
  ]);

  const getCurrent = (): number => new Date().getTime();

  const AddNewTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: getCurrent(), completed: false }]);
  };

  const deleteTask = (id:number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-backbody flex-col ">
        <Taskform AddNewTask={AddNewTask}  />
        <Tasklist deleteTask={deleteTask} tasks={tasks} />
      </div>
    </>
  );
}

export default App;
