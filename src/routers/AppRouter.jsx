import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Characters } from '../components/characters/Characters';
import { Home } from '../components/home/Home';
import { BreakingBad } from '../components/breakingbad/BreakingBad';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/breaking-bad" element={<BreakingBad />} />
        </Routes>
    </div>
  )
}