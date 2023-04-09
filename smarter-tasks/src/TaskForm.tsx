import React from "react";

interface TaskFormProps {
  addTask: (task: TaskFormState) => void;
}
interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      description: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <form className="flex gap-2 items-center" onSubmit={this.addTask}>
        <input
          type="text"
          className="border-2 p-2 border-gray-400"
          value={this.state.title}
          onChange={this.titleChanged}
        />
        <button
          type="submit"
          className="py-2 px-5 mt-2 text-white bg-blue-500 hover:bg-blue-700 font-semibold rounded-lg"
        >
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
