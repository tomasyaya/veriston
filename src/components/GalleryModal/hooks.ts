import React from "react";
import { getLastPosition, getCurrentElement } from "./utils";
import { GalleryHandlers, UseGalleryModal } from "./types";

export function useBuildHandlers(
  setPosition: React.Dispatch<React.SetStateAction<number>>,
  position: number,
  children: React.ReactNode
): GalleryHandlers {
  return React.useMemo(
    () => ({
      handleLeft: () => {
        const nextPosition = position - 1;
        const startOver = nextPosition < 0;
        const lastPosition = getLastPosition(children);
        const p = startOver ? lastPosition : nextPosition;
        setPosition(p);
      },
      handleRight: () => {
        const nextPosition = position + 1;
        const lastPosition = getLastPosition(children);
        const startOver = nextPosition > lastPosition;
        const p = startOver ? 0 : nextPosition;
        setPosition(p);
      },
    }),
    [setPosition, position, children]
  );
}

export function useGalleryModal(
  children: React.ReactNode,
  defaultPosition: number
): UseGalleryModal {
  const [position, setPosition] = React.useState(defaultPosition);
  const currentElement = getCurrentElement(children, position);
  const { handleLeft, handleRight } = useBuildHandlers(
    setPosition,
    position,
    children
  );
  return { handleLeft, handleRight, currentElement };
}
