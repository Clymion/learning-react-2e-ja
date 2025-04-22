import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ColorProvider from "./ColorProvider";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
);
