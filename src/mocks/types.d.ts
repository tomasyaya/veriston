export type FileType = "image" | "video" | "audio";

export interface MediaFile {
  name: string;
  id: string;
  type: FileType;
  url: string;
  date: string;
}
