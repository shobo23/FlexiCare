import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalLayout from "./layouts/GlobalLayout.jsx";
import "./index.css";
import App from "./App.jsx";
import store from "./services/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalLayout>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalLayout>
  </StrictMode>
);
