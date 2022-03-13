import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Navbar } from '../ui/Navbar';

import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
    </>
  )
}