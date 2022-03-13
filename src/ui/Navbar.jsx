import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../index.css'

export const Navbar = () => {

    const handleLogout = () => {
        //TODO: por hacer
        console.log('logout')
    }


    return (
       <> 
        <nav className="navbar navbar-expand-sm">
            <Link 
                className="navbar-brand animate__heartBeat" 
                to="/Home"
            >
            Breaking Bad | APP
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className= {({isActive}) =>'nav-item nav-link' + (isActive ? 'active' : '')}
                        to="/Characters"
                    >
                        Characters
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-info">Leia</span>
                    <button
                        className="nav-item nav-btn" 
                        onClick={handleLogout}
                        to='/Login'
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
        </>
    )
}