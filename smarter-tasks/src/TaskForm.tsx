import React from "react";

interface TaskFormProps {

}
interface TaskFormState {
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
  }
  inputRef = React.createRef<HTMLInputElement>();

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with ${this.inputRef.current?.value}`);
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input type="text" ref={this.inputRef} />
        <button type="submit">Add item</button>
      </form>
    )
  }
}
export default TaskForm;