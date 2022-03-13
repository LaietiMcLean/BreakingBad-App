import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BreakingBad } from '../components/breakingbad/BreakingBad'
import { Characters } from '../components/characters/Characters'
import { Navbar } from '../ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="Characters" element={<Characters />} />
            <Route path="Home" element={<BreakingBad  />} />

            <Route path="/" element={<BreakingBad />} />
        </Routes>
    </>
  )
}
