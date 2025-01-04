import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ChatApp from "./ChatApp.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <ChatApp />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
