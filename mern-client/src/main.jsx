import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider";
import "./index.css";
import router from "./routers/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

    {/* <App /> */}
  </React.StrictMode>
);
