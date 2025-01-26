import React from "react";
import { ModalBackground, ModalContent, CloseButton } from "./styles";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, message }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContent>
        <h2>Aviso</h2>
        <p>{message}</p>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
