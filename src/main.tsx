import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import { makeServer } from "./services/mirage";

import "./styles/global.css";

if (process.env.NODE_ENV === "development") {
  console.log("make");
  makeServer();
}

import Routes from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
