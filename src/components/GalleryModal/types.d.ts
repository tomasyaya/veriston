import React from "react";

export interface GalleryModalProps {
  open: boolean;
  defaultPosition?: number;
  children: React.ReactNode;
  onClose?: () => void;
}
