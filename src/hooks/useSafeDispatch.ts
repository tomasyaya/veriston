import React from "react";

export function useSafeDispatch<D>(
  dispatch: React.Dispatch<D>
): React.Dispatch<D> {
  const mounted = React.useRef<boolean>(false);

  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return React.useCallback(
    (arg) => (mounted.current ? dispatch(arg) : undefined),
    [dispatch]
  );
}
