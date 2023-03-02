import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Manage from "./Manage/Manage";
import Register from "./Register/Register";
import AdminLogin from "./AdminLogin";
import RegisterAdmin from "./Register/RegisterAdmin";

const Admin = () => {
  // defining states
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  //   tab function
  const showForm = (formName) => {
    setActiveTab(formName);
  };

  // loggedin State Handler Function
  const loginStateHandler = (state) => {
    setIsLoggedin(state);
  };

  return (
    <>
      {!isLoggedin ? (
        <AdminLogin loginState={loginStateHandler} />
      ) : (
        <div class="admin-container">
          <h2>Admin Panel</h2>
          <div class="form-tabs">
            {/* register admin */}
            <button
              className={`tab ${activeTab === "admin" ? "active" : ""}`}
              onClick={() => showForm("admin")}
            >
              Add Admin
            </button>
            {/* manage */}
            <button
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => showForm("login")}
            >
              Manage
            </button>
            {/* register */}
            <button
              className={`tab ${activeTab === "register" ? "active" : ""}`}
              onClick={() => showForm("register")}
            >
              Register
            </button>
          </div>
          {/* register admin */}
          <div
            id="admin-form"
            className={`form-content ${activeTab === "admin" ? "active" : ""}`}
          >
            <RegisterAdmin />
          </div>
          {/* manage */}
          <div
            id="login-form"
            className={`form-content ${activeTab === "login" ? "active" : ""}`}
          >
            <Manage loginState={loginStateHandler} />
          </div>
          {/* register */}
          <div
            id="register-form"
            className={`form-content ${
              activeTab === "register" ? "active" : ""
            }`}
          >
            <Register />
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
