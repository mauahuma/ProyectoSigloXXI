import React from "react";
import "./LoginWorker.scss";
import { LoginForm } from "../../../components/Workers";

export function LoginWorker() {
  return (
    <div className="login-worker">
      <div className="login-worker__content">
        <h1>Entrar al Panel</h1>
        <LoginForm />
      </div>
    </div>
  );
}
