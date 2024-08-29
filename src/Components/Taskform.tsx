import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../Interfaces/Task";

interface Props {
  AddNewTask: (task: Task) => void;
}

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export default function Taskform({ AddNewTask }: Props) {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: handleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddNewTask(task);
    setTask(initialState)
  };

  return (
    <div className="mb-1  w-[500px] absolute top-5 ">
      <h1 className="text-3xl text-white text-center font-semibold  ">
        Add Task
      </h1>

      <form onSubmit={handleNewTask} className="p-5">
        <input
          type="text"
          placeholder="write a title "
          name="title"
          value={task.title}
          className="mb-3 rounded shadow w-full "
          onChange={handleInputChange}
        />
        <textarea
          className="block rounded w-full"
          name="description"
          value={task.description}
          rows={3}
          cols={22}
          placeholder="Write a description"
          onChange={handleInputChange}
          id=""
        ></textarea>
        <button className="p-1 text-white bg-blue-500 w-[100px] hover:bg-blue-600 m-auto text-center justify-center flex mt-2 rounded ">
          Submit
        </button>
      </form>
    </div>
  );
}
