import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { About } from "./About";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { SingleProduct } from "./SingleProduct";
import { Signup } from "./Signup";
import { PrivateRoute } from "../Components/PrivateRoutes";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};
