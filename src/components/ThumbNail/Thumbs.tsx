import React from "react";
import { ThumbProps } from "./types";

export function VideoThumb({ src }: ThumbProps) {
  return <video style={{ height: "100%", width: "100%" }} src={src} controls />;
}

export function AudioThumb({ src }: ThumbProps) {
  return <audio style={{ height: "100%", width: "100%" }} src={src} controls />;
}

export function ImageThumb({ src, alt }: ThumbProps) {
  return <img style={{ height: "100%", width: "100%" }} src={src} alt={alt} />;
}
