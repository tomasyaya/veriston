export type FileType = "image" | "video" | "audio";

export interface File {
  name: string;
  id: string;
  type: FileType;
  url: string;
  date: string;
}

export interface GetFilesReturnValue {
  audios: File[];
  videos: File[];
  images: File[];
}
