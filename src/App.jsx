import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // ✅ Navigate ditambahkan
import Loading from "./components/Loading";
import "./assets/tailwind.css";

// Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout")); // ✅ GuestLayout ditambahkan

// Pages - Admin/User
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

// Pages - Auth
const Login = React.lazy(() => import("./auth/Login"));
const Register = React.lazy(() => import("./auth/Register"));
const Forgot = React.lazy(() => import("./auth/Forgot"));

// Pages - Guest (Untuk Quiz)
const Home = React.lazy(() => import("./pages/Home"));
const AllProducts = React.lazy(() => import("./pages/AllProducts"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* 1. Guest Routes (Quiz Section) */}
        <Route element={<GuestLayout />}>
          {/* Redirect awal dari "/" ke "/guest" */}
          <Route path="/" element={<Navigate to="/guest" />} /> 
          <Route path="/guest" element={<Home />} />
          <Route path="/guest/all-products" element={<AllProducts />} /> 
          
        </Route>

        {/* 2. Admin/Main Routes */}
        <Route element={<MainLayout />}>
          {/* Dashboard dipindah ke path spesifik agar tidak bentrok dengan "/" guest */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        {/* 3. Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Fallback 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}