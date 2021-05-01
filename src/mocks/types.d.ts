export type FileType = "image" | "video" | "audio";

export interface MediaFile {
  [key: string]: string | FileType;
  name: string;
  id: string;
  type: FileType;
  url: string;
  date: string;
}
