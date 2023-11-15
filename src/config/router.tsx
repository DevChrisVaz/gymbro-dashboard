import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../core/components/Layout";
import { Home } from "../features/home/presentation/pages/Home";
import { Users } from "../features/users/presentation/pages/Users";
import { Login } from "@/features/auth/presentation/pages/Login";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="/error" element={<>Error</>} />
                <Route path="*" element={<>Not found</>} />
            </Routes>
        </BrowserRouter>
    )
}