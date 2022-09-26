import React from "react";
import { LoginWorker } from "../../Pages/Workers";
import "./WorkersLayout.scss";
import { useAuth } from "../../hooks";
export function WorkersLayout(props) {
  const { children } = props;
  const { auth } = useAuth();

  if (!auth) return <LoginWorker />;
  return (
    <div>
      <p>WorkersLayout </p>
      {children}
    </div>
  );
}
