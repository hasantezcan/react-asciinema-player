# react-asciinema-player

A React component for playing asciinema recordings.

## Installation

```bash
npm install react-asciinema-player
```

## Usage

```jsx
import React from "react";

import AsciinemaPlayer from "react-asciinema-player";

const App = () => (
  <AsciinemaPlayer
    src="https://asciinema.org/a/1.cast"
    options={{
      idleTimeLimit: 3,
      preload: true,
      autoPlay: true,
      loop: 0,
      speed: 0.8,
    }}
  />
);

export default App;
```
