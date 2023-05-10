import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (id: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      id={task.id}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      deleteTask={props.deleteTask}
    />
  ));
  return <>{list}</>;
};

export default TaskList;
