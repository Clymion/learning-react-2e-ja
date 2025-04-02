import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import colors from './color-data.json';
import App from "./App";

export type ColorType = typeof colors;
export const ColorContext = createContext<ColorType | undefined>(undefined);
const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ColorContext.Provider value={{ colors }}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>,
);
