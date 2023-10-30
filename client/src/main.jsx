import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/Appcontext.jsx";
import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import createStore from

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
