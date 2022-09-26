import React from "react";
import "./LoginWorker.scss";
import { LoginForm } from "../../../components/Workers";

export function LoginWorker() {
  return (
    <div className="login-admin">
      <div className="login-admin__content">
        <h1>Entrar al Panel</h1>
        <LoginForm />
      </div>
    </div>
  );
}
