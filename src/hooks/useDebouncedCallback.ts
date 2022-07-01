import { useCallback, useRef } from "react";

interface ICallback<T> {
  (value: T): void;
}

function useDebouncedCallback<T>(
  callback: ICallback<T>,
  delay: number
): ICallback<T> {
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const debouncedCallback = useCallback(
    (value: T) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}

export default useDebouncedCallback;
