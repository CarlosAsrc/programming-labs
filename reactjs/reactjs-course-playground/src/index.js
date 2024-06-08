import React from "react";
import ReactDOM from "react-dom/client";
import AppClass from "./AppClass";
import AppFunction from "./AppFunction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          <AppClass msg='Class component version'/>
          <AppFunction msg='Functional component version'/>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
