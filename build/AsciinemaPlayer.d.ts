import React from "react";
import { AsciiOptions } from "./types";
interface AsciinemaPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    options?: AsciiOptions;
}
declare const AsciinemaPlayer: React.ForwardRefExoticComponent<AsciinemaPlayerProps & React.RefAttributes<HTMLDivElement>>;
export default AsciinemaPlayer;
