import React from "react";
import { Modal } from "../Modal";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "../Icons";
import { Section, SliderContainer, CloseCtn, IconBtn } from "./styles";
import { GalleryModalProps } from "./types";
import { useGalleryModal } from "./hooks";

function GalleryModal({
  open,
  defaultPosition = 0,
  children,
  onClose,
}: GalleryModalProps) {
  const { handleLeft, handleRight, currentElement } = useGalleryModal(
    children,
    defaultPosition
  );

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
