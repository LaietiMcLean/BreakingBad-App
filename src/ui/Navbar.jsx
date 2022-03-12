import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../index.css'

export const Navbar = () => {


    return (
       <> 
        <nav className="navbar navbar-expand-sm">
            <Link 
                className="navbar-brand" 
                to="/Home"
            >
            Breaking Bad | APP
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className="nav-item nav-link" 
                        exact="true"
                        to="/Characters"
                    >
                        Characters
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