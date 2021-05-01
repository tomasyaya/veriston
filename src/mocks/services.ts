import { audios, videos, images } from "./data";
import { MediaFile } from "./types";

function getRequest<P>(returnValue: P, time?: number): Promise<P> {
  const defaultTime = 1000;
  return new Promise((res) =>
    setTimeout(() => res(returnValue), time || defaultTime)
  );
}

function filtersHash(query: string) {
  const [, filters] = query.split("=");
  if (!filters) {
    return null;
  }
  return filters
    .split(",")
    .reduce((filters: { [key: string]: boolean }, filter: string) => {
      filters[filter] = true;
      return filters;
    }, {});
}

export function getFiles(query: string): Promise<MediaFile[]> {
  const filters = filtersHash(query);
  const files: MediaFile[] = [...audios, ...videos, ...images];
  if (!filters) {
    return getRequest(files);
  }
  const filteredFiles = files.filter(({ type }) => filters[type]);
  return getRequest(filteredFiles);
}
