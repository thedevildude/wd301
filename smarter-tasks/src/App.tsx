import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import TaskDetailsPage from "./TaskDetailsPage";
import Header from "./Header";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";

function App() {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/signin" || location.pathname === "/404";
  return (
    <div>
      {!hideHeader && <Header />}
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
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
