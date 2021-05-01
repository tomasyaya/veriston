import React from "react";
import { Portal } from "../Portal";
import styled from "@emotion/styled";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}

const ModalWrapper = styled("div")`
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled("div")`
  height: fit-content;
  width: fit-content;
`;

function Modal({ children, open }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <ModalWrapper>
        <Content>{children}</Content>
      </ModalWrapper>
    </Portal>
  );
}

export default Modal;
