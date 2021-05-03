import React from "react";
import { ThumbProps } from "./types";

export function VideoThumb({ src }: ThumbProps) {
  return (
    <video style={{ maxWidth: "100%", maxHeight: "100%" }} src={src} controls />
  );
}

export function AudioThumb({ src }: ThumbProps) {
  return (
    <audio style={{ maxWidth: "100%", maxHeight: "100%" }} src={src} controls />
  );
}

export function ImageThumb({ src, alt }: ThumbProps) {
  return (
    <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={src} alt={alt} />
  );
}
