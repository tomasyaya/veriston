export const callAll = (...fns: Function[]) => (...args: any) =>
  fns.forEach((fn: Function) => fn?.(...args));
