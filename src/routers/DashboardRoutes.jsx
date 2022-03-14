import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui/Navbar'

import { Characters } from '../components/characters/Characters'
import { CharactersDetail } from '../components/characters/CharactersDetail'


export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
  
            <Route path="Characters" element={<Characters />} />
            <Route path="Characters/:DetailId" element={<CharactersDetail />} />
          
        </Routes>
    </>
  )
}
