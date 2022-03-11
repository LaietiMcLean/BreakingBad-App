import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Books } from '../components/books/Books';
import { Home } from '../components/home/Home';
import { NytBestSellers } from '../components/nyt/NytBestSellers';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/nyt-bestsellers" element={<NytBestSellers />} />
        </Routes>
    </div>
  )
}