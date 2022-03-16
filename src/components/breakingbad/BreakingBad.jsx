import React from 'react'

import logo from '../../imgIconHeisenberg.png'
import '../breakingbad/breakingbad.css'

export const BreakingBad = () => {
  return (
    <div>
      <div className="container-homepage">
        <div className="container">
        
          <div className="container-homepage-sub">
              <h3>If you want to see the</h3>
          </div>

          <div className="container-section">
  
              <div className="section1-homepage">
                <h1>Official Website</h1>
              </div>

              <div className="section1-sub-homepage">
                <h2>👇🏽</h2>
              </div>

              <div className="container-img">
                <a href="https://www.sonypictures.com/tv/breakingbad" ><img src={logo} alt={logo}/></a>
              </div>

          </div>

        </div>
      </div>
    </div>
  )
}