import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePreparaciones } from "../../../hooks";
import { PreparacionCarta } from "../../../components/Clients";

import "./ComandCa.scss";

export function ComandCa() {
  const { numero_mesa } = useParams();
  const { loading, preparaciones, getPreparaciones } = usePreparaciones();
  useEffect(() => getPreparaciones(), []);
  return (
    <div>
      <Link to={`/`}>Volver al inicio</Link>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <PreparacionCarta Preparaciones={preparaciones} />
      )}
    </div>
  );
}
