import { nanoid } from "nanoid";
import { File, FileType } from "./types";

const IMAGE: FileType = "image";
const VIDEO: FileType = "video";
const AUDIO: FileType = "audio";

export const images: File[] = [
  {
    id: nanoid(),
    type: IMAGE,
    name: "cat",
    url: "#",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: IMAGE,
    name: "dog",
    url: "#",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: IMAGE,
    name: "pig",
    url: "#",
    date: "10/10/20",
  },
];

export const videos = [
  {
    id: nanoid(),
    type: VIDEO,
    name: "moto",
    url: "#",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: VIDEO,
    name: "car",
    url: "#",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: VIDEO,
    name: "bike",
    url: "#",
    date: "10/10/20",
  },
];

export const audios = [
  {
    id: nanoid(),
    type: AUDIO,
    name: "crash",
    url: "#",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: AUDIO,
    name: "bell",
    url: "#",
    date: "10/10/20",
  },
  {
    id: nanoid(),
    type: AUDIO,
    name: "guitar",
    url: "#",
    date: "10/10/20",
  },
];
