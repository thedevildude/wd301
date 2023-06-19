import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import { Routes, Route, useLocation } from "react-router-dom";
import TaskDetailsPage from "./TaskDetailsPage";
import Header from "./Header";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/signin" && <Header />}
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route
          path="/tasks"
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route
          path="/tasks/:id"
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
