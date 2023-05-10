import React from "react";
import "./TaskCard.css";

interface TaskProp {
  id: number;
  title: string;
  dueDate: string;
  description: string;
  deleteTask: (id: number) => void;
}

const Task = (props: TaskProp) => {
  return (
    <li className="TaskItem flex items-center justify-between shadow-md border border-slate-100">
      <div>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
      </div>
      <button
        className="deleteTaskButton p-2 bg-blue-400 text-white mr-5"
        onClick={() => props.deleteTask(props.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
