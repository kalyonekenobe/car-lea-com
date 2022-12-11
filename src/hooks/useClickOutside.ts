import {RefObject, useEffect} from "react";

export const useClickOutside = (ref: RefObject<HTMLInputElement>, callback: () => any) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!ref.current?.classList.contains('active'))
        return;
      if (!ref.current?.contains(event.target as HTMLInputElement))
        callback();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}