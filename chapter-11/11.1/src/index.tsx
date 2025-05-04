import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';

import { BrowserRouter as Router } from "react-router";

const root = createRoot(document.getElementById("root")! as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>
);
