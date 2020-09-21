import React from "react";
import "./styles/main.scss";
import { ActiveImageProvider } from "./context";

import { Header } from "./components";
import { Gallery } from "./components";

function App() {
  return (
    <ActiveImageProvider>
      <Header />
      <Gallery />
    </ActiveImageProvider>
  );
}

export default App;
