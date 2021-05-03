import { nanoid } from "nanoid";
import { FileType } from "./types";

const IMAGE: FileType = "image";
const VIDEO: FileType = "video";
const AUDIO: FileType = "audio";

export const images = [
  {
    id: nanoid(),
    type: IMAGE,
    name: "lagoon",
    url: "https://unsplash.com/photos/5tRmLGguL3Q/download?force=true",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: IMAGE,
    name: "parrot",
    url: "https://unsplash.com/photos/4euubO4CasU/download?force=true",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: IMAGE,
    name: "A garden",
    url: "https://unsplash.com/photos/brVkInFjtuo/download?force=true",
    date: "10/10/20",
  },
];

export const videos = [
  {
    id: nanoid(),
    type: VIDEO,
    name: "snow",
    url:
      "https://pexels.com/es-es/video/855615/download/?search_query=&amp;tracking_id=5kv6ed4g81",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: VIDEO,
    name: "beach",
    url:
      "https://pexels.com/es-es/video/1739010/download/?search_query=&amp;tracking_id=5kv6ed4g81",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: VIDEO,
    name: "lake",
    url:
      "https://pexels.com/video/5640074/download/?search_query=fantasy&amp;tracking_id=g87h4sck32g",
    date: "10/10/20",
  },
];

export const audios = [
  {
    id: nanoid(),
    type: AUDIO,
    name: "crash",
    url: "https://freesound.org/data/previews/570/570047_5674468-lq.mp3",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: AUDIO,
    name: "bell",
    url: "https://freesound.org/data/previews/569/569981_12698909-lq.mp3",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: AUDIO,
    name: "guitar",
    url: "https://freesound.org/data/previews/570/570013_8779949-lq.mp3",
    date: "10/10/20",
  },
];
