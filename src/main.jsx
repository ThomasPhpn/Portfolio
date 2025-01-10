import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faCode,
  faBars,
  faTimes,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Ajouter les icônes à la bibliothèque FontAwesome
library.add(
  faEnvelope,
  faLinkedin,
  faGithub,
  faCode,
  faBars,
  faTimes,
  faKeyboard
);

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
