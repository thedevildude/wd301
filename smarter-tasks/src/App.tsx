import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <TaskForm/>
      <TaskList tasks={[]}/>
    </div>
  );
}

export default App;
