import { ComponentMeta } from "@storybook/react";

import AsciinemaPlayer from "./AsciinemaPlayer";

export default {
  title: "AsciinemaPlayer",
  component: AsciinemaPlayer,
} as ComponentMeta<typeof AsciinemaPlayer>;


export const Default = () => (
  <AsciinemaPlayer src="https://asciinema.org/a/47YZ21XYGbUxJdEvx9afFb28j.cast" />
);
