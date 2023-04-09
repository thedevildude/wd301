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
    if (this.state.title === "" || this.state.dueDate === "") return;
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.id === "todoDescription") {
      this.setState({ ...this.state, description: event.target.value });
    } else if (event.target.id === "todoDueDate") {
      this.setState({ ...this.state, dueDate: event.target.value });
    } else {
      this.setState({ ...this.state, title: event.target.value });
    }
  };
  render() {
    return (
      <form className="flex gap-2 items-center" onSubmit={this.addTask}>
        <div className="flex flex-col">
          <input
            type="text"
            className="border-2 p-2 border-gray-400"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="todoDescription"
            className="border-2 p-2 border-gray-400"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            type="date"
            id="todoDueDate"
            className="border-2 p-2 border-gray-400"
            value={this.state.dueDate}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          id="addTaskButton"
          className="py-2 px-5 mt-2 text-white bg-blue-500 hover:bg-blue-700 font-semibold rounded-lg"
        >
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
