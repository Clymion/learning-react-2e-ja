import React from "react";
import { createRoot } from "react-dom/client";
import ColorProvider from "./ColorProvider";
import App from "./App";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
);
