import React from "react";
import { Modal } from "../Modal";

function childrenToArray(children: React.ReactNode) {
  return React.Children.toArray(children);
}
function getCurrentElement(children: React.ReactNode, position: number) {
  return childrenToArray(children)[position];
}

function getLastPosition(children: React.ReactNode) {
  return childrenToArray(children).length - 1;
}

interface GalleryModalProps {
  open: boolean;
  defaultPosition?: number;
  children: React.ReactNode;
  onClose?: () => void;
}

function GalleryModal({
  open,
  defaultPosition = 0,
  children,
  onClose,
}: GalleryModalProps) {
  const [position, setPosition] = React.useState(defaultPosition);
  const currentElement = getCurrentElement(children, position);
  const handleLeft = () => {
    const nextPosition = position - 1;
    const startOver = nextPosition < 0;
    const lastPosition = getLastPosition(children);
    const p = startOver ? lastPosition : nextPosition;
    setPosition(p);
  };
  const handleRight = () => {
    const nextPosition = position + 1;
    const lastPosition = getLastPosition(children);
    const startOver = nextPosition > lastPosition;
    const p = startOver ? 0 : nextPosition;
    setPosition(p);
  };
  return (
    <Modal open={open}>
      <section>
        <div>
          <div>
            <button onClick={handleLeft}>left</button>
          </div>
          <div>{currentElement}</div>
          <div>
            <button onClick={handleRight}>right</button>
          </div>
        </div>
        <div>
          <button onClick={onClose}>close</button>
        </div>
      </section>
    </Modal>
  );
}

export default GalleryModal;
