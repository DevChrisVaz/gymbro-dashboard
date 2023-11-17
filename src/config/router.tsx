import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "../core/components/Layout";
import { Home } from "../features/home/presentation/pages/Home";
import { Users } from "../features/users/presentation/pages/Users";
import { Login } from "@/features/auth/presentation/pages/Login";
import { Plans } from "@/features/plans/presentation/pages/Plans";
import { CreatePlan } from "@/features/plans/presentation/pages/CreatePlan";
import { Branches } from "@/features/branches/presentation/pages/Branches";
import { CreateBranch } from "@/features/branches/presentation/pages/CreateBranch";
import { Branch } from "@/features/branches/presentation/pages/Branch";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="plans" element={<Plans />} />
                    <Route path="plans/create-plan" element={<CreatePlan />} />
                    <Route path="branches" element={<Outlet />}>
                        <Route index element={<Branches />} />
                        <Route path="create-branch" element={<CreateBranch />} />
                        <Route path=":id" element={<Branch />} />
                        <Route path=":id/create-plan" element={<CreatePlan />} />
                    </Route>
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="/error" element={<>Error</>} />
                <Route path="*" element={<>Not found</>} />
            </Routes>
        </BrowserRouter>
    )
}