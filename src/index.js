import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import Store from "./Store/Store";
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}> 

    <App />

  </Provider>
);    
