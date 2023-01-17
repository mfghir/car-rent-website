import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductsProvider from "./context/ProductsProvider";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
  <ProductsProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
  </ProductsProvider>
    </QueryClientProvider>
);
