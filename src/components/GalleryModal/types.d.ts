import React from "react";

export interface GalleryModalProps {
  open: boolean;
  defaultPosition?: number;
  children: React.ReactNode;
  onClose?: () => void;
}

export interface GalleryHandlers {
  handleLeft: () => void;
  handleRight: () => void;
}

export interface UseGalleryModal extends GalleryHandlers {
  currentElement: React.ReactNode;
}
