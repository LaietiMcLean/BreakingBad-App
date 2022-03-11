import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AddCategory } from './AddCategory'

import '../ui/navbar.css'

export const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link 
                className="navbar-brand" 
                to="/nyt-bestsellers"
            >
                NYT Best Sellers
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        exact="true"
                        to="/Home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        exact="true"
                        to="/Books"
                    >
                        Books
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        exact="true"
                        to="/Login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
        </>
    )
}