import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./features/products_module/components/ProductsPage.tsx";
import { ToastContainer } from "react-toastify";
import AuthPage from "./features/auth_module/components/AuthPage.tsx";
import PrivateRoute from "./global/routes/privateRoute.tsx";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
          <Route path="/auth" element={<AuthPage />} />

          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};

export default App;
