import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import App from "./Colors/index";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>
);
