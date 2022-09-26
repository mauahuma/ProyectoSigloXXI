import React from "react";
import { useAuth } from "../../hooks";
export function HomeAdmin() {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Home Admin</h1>
      <button onClick={logout}>Cerrar Sesion</button>
    </div>
  );
}
