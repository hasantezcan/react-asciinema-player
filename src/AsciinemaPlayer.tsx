import React from "react";
import { useEffect, useRef } from "react";
import "asciinema-player/dist/bundle/asciinema-player.css";
import { AsciiOptions } from "./types";
import { create } from "asciinema-player";

interface AsciinemaPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  options?: AsciiOptions;
}

const mergeRefs = (...refs: any[]) => {
  return (value: any) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    });
  };
};

const AsciinemaPlayer = React.forwardRef<HTMLDivElement, AsciinemaPlayerProps>((props, ref) => {
  const { src, options = {}, ...rest } = props;
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = divRef.current;
    if (currentRef) {
      currentRef.innerHTML = "";
      create(src, currentRef, options);
    }
  }, [src]);

  return <div ref={mergeRefs(divRef, ref)} {...rest} />;
});

export default AsciinemaPlayer;
