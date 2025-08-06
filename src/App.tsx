import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserTablePage from "./pages/UserTablePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTablePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
