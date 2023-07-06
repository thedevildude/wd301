import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskItem } from "./types";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<TaskDetailsPageParams>();
  const [task, setTask] = useState<TaskItem>({
    id: 0,
    title: "",
    dueDate: "",
    description: "",
  });

  useEffect(() => {
    const localtask = localStorage.getItem("tasks");
    const parsedTasks: TaskItem[] = localtask && JSON.parse(localtask).tasks;
    const f_task: TaskItem | undefined = parsedTasks.find(
      (task) => task.id === Number(id)
    );
    f_task && setTask(f_task);
  }, [id, task]);

  return (
    <div>
      <h3>{task.title}</h3>
      <p>This is the Task Details page for task with ID: {id}</p>
    </div>
  );
};

export default TaskDetailsPage;
