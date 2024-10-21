import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";

import "./libraries/bootstrap/bootstrap.bundle.js";
import "./libraries/bootstrap/bootstrap.css";
import initLocalStorage from "./modules/localStore/init-local-store.js";
import "./styles/defaults.css";

initLocalStorage();
createRoot(document.getElementById("root")).render(<AppRoutes />);
