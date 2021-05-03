import React from "react";
import { Modal } from "../Modal";
import { getCurrentElement, getLastPosition } from "./utils";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "../Icons";
import { Section, SliderContainer, CloseCtn, IconBtn } from "./styles";
import { GalleryModalProps } from "./types";

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
      <Section>
        <CloseCtn>
          <IconBtn onClick={onClose}>
            <CloseIcon height={15} width={15} />
          </IconBtn>
        </CloseCtn>
        <SliderContainer>
          <div>
            <IconBtn onClick={handleLeft}>
              <ArrowLeftIcon height={20} width={20} />
            </IconBtn>
          </div>
          <div>{currentElement}</div>
          <div>
            <IconBtn onClick={handleRight}>
              <ArrowRightIcon height={20} width={20} />
            </IconBtn>
          </div>
        </SliderContainer>
      </Section>
    </Modal>
  );
}

export default GalleryModal;
