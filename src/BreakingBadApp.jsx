import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './auth/authReducer'
import { AuthContext } from './auth/authContext'

import './index.css'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const BreakingBadApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init );

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  

  return (
   
      <AuthContext.Provider value= {{
        user, 
        dispatch
      }}>
        <AppRouter />
      </AuthContext.Provider>
 
  )
}
