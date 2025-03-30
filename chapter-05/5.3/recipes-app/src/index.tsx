import React from "react";
import { createRoot } from "react-dom/client";
import data from "../data/recipes.json";
import Menu from "./components/Menu";

const rootElement = document.getElementById("root");

// rootElementがnullでないことを確認
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Menu recipes={data} />);
} else {
  console.error("Root element not found");
}
