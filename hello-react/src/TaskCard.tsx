import React from "react";
import "./TaskCard.css";

interface Props {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard = (props: Props) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{props.dueDate ? "Due on:" : "Completed on:"} {props.dueDate ? props.dueDate : props.completedAtDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard;