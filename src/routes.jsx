import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import RegistrationPage from "./Components/RegistrationPage.jsx";

const AppRoutes = () => {
  const [role, setRole] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setRole={setRole} />} />
        <Route
          path="/register/:role"
          element={<RegistrationPage role={role} />}
        />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
