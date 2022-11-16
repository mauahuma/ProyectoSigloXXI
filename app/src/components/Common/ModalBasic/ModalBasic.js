import React from "react";
import { Modal } from "react-bootstrap";
import "./ModalBasic.scss";

export function ModalBasic(props) {
  const { show, size, title, children, onClose } = props;

  return (
    <Modal className="modal-basic" show={show} onHide={onClose}>
      {title && <Modal.Header>{title}</Modal.Header>}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

ModalBasic.defaultProps = {
  size: "tiny",
};
