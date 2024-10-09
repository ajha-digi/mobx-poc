import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import RootProvider from "./context/RootProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootProvider><RouterProvider router={router} /></RootProvider>);
