import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import { types } from '../types/types'

import '../index.css'


export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {

        dispatch({
            type: types.logout
        });

        navigate('/login', {
            replace: false
        })
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
                    <NavLink 
                        className= {({isActive}) =>'nav-item nav-link' + (isActive ? 'active' : '')}
                        to="/Login"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-info">{user.name}</span>
                    <button
                        className="nav-item nav-btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
        </>
    )
}