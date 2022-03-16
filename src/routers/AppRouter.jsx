import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Navbar } from '../ui/Navbar';

import { BreakingBad } from '../components/breakingbad/BreakingBad';
import { Login } from '../components/Login/Login';

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { Footer } from '../ui/footer';

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<BreakingBad />} />
            <Route path="/Home" element={<BreakingBad  />} />
            <Route path="/login" element={<Login />} />
  
          <Route path="/*" element={
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>} 
          />
        </Routes>
        <Footer />
    </>
  )
}