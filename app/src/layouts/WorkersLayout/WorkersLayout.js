import React from "react";
import { LoginWorker } from "../../Pages/Workers";
import "./WorkersLayout.scss";
import { useAuth } from "../../hooks";
import { TopMenu, SideMenu } from "../../components/Workers";

export function WorkersLayout(props) {
  const { children } = props;
  const { auth } = useAuth();

  if (!auth) return <LoginWorker />;
  return (
    <div>
      <div>
        <TopMenu />
      </div>

      <div>{children}</div>
    </div>
  );
}
