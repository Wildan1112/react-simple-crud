import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from './store'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
