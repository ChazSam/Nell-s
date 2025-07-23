// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App.tsx";
// import Routes from "./Routes.tsx"

// const router = createBrowserRouter(Routes);

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import RouterProvider
import "./index.css";
import routes from "./Routes"; // Corrected import (assuming Routes.tsx exports default)

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider here */}
  </StrictMode>
);