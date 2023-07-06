import React from "react";
import "./TaskCard.css";
import { Link } from "react-router-dom";

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
        <Link
          to={`/tasks/${props.id}`}
          className="text-base font-bold my-1 cursor-pointer"
        >
          {props.title}
        </Link>
        <p className="text-sm text-slate-500">{props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
      </div>
      <button
        className="deleteTaskButton p-2 bg-blue-400 text-white mr-5"
        onClick={(e) => {
          e.stopPropagation();
          props.deleteTask(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
