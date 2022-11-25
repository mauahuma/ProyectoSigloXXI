import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalConfirm.scss";

export function ModalConfirm(props) {
  const { title, show, onClose, onCloseText, onConfirm, onConfirmText } = props;

  return (
    <Modal className="modal-confirm" show={show} size="mini">
      {title && <Modal.Header>{title}</Modal.Header>}

      <Modal.Footer>
        <Button negative onClick={onClose}>
          {onCloseText || "Cancelar"}
        </Button>
        <Button positive onClick={onConfirm}>
          {onConfirmText || "Aceptar"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
