import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//      <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/cra-ts-5/">
      {/* <BrowserRouter> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
