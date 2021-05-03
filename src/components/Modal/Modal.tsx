import { Portal } from "../Portal";
import { ModalWrapper, Content } from "./styles";
import { ModalProps } from "./types";

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
