import React from "react";
import { Navigation } from "./routes";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
  );
}
