import { AudioThumb, VideoThumb, ImageThumb } from "./Thumbs";
import { ThumbProps } from "./types";

const VIDEO = "video";
const AUDIO = "audio";
const IMAGE = "image";

export function selectThumb(type: string): React.FC<ThumbProps> {
  const thumb = new Map([
    [VIDEO, VideoThumb],
    [AUDIO, AudioThumb],
    [IMAGE, ImageThumb],
  ]);
  return (thumb.get(type) as unknown) as React.FC<ThumbProps>;
}
