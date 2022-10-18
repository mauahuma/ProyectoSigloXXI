import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { usePreparaciones } from "../../hooks";
import { PreparacionCarta } from "../../components/Clients/";

export function Preparaciones() {
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
