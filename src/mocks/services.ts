import { audios, videos, images } from "./data";
import { GetFilesReturnValue } from "./types";

function getRequest<P>(returnValue: P, time?: number): Promise<P> {
  const defaultTime = 1000;
  return new Promise((res) =>
    setTimeout(() => res(returnValue), time || defaultTime)
  );
}

export function getFiles(): Promise<GetFilesReturnValue> {
  const files: GetFilesReturnValue = { audios, videos, images };
  return getRequest(files);
}
