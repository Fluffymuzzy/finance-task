import { useEffect, useRef } from "react";


export const usePrevValue = <T>(value: T) => {
  const ref = useRef<T | undefined>(undefined);
  if (ref.current === undefined) {
    ref.current = value;
  }
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
