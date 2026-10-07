import { createRoot } from "react-dom/client";

import { App } from "./app";
import { reportWebVitals } from "./reportWebVitals";

createRoot(document.getElementById("root")!).render(<App />);

reportWebVitals();
