import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types';

import '../../index.css'

export const Login = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleLogin = () => {
      const action = {
          type: types.login,
          payload: {name: 'María López'}
      }

      dispatch(action);
      const lastPath = localStorage.getItem('lastPath') || '/home';

      navigate( lastPath, {
        replace: true
    });

  }


  return (

    <div className="container">
        <div className="container-section">
            <h1>Login</h1>
            <hr />
            <button 
                className="btn"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    </div>
  )
}
