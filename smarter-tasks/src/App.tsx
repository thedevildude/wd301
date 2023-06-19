import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import { Routes, Route } from "react-router-dom";
import TaskDetailsPage from "./TaskDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskApp />} />
      <Route path="/tasks/:id" element={<TaskDetailsPage />} />
    </Routes>
  );
}

export default App;
