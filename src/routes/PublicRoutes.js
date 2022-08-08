import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "../Layouts/AuthLayout";
import {RegisterPage} from "../Pages/RegisterPage/RegisterPage";
import {LoginPage} from "../Pages/LoginPage";

export const PublicRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />        
      </Routes>
    </AuthLayout>
  )
}
