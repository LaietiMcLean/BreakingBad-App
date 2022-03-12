import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Characters } from '../components/characters/Characters';
import { BreakingBad } from '../components/breakingbad/BreakingBad';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<BreakingBad />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Home" element={<BreakingBad  />} />
        </Routes>
    </div>
  )
}