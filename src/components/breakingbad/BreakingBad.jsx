import React from 'react'

import { QuotesComponent } from '../quotes/QuotesComponent.jsx'

import logo from '../../imgIconHeisenberg.png'

import '../breakingbad/breakingbad.css'

export const BreakingBad = () => {
  return (
    <div>
      <div className="container-homepage">
        <div className="container">
          <div className="container-section">
          <QuotesComponent />
              {/*<div className="section1-sub-homepage">
              <i> 👇🏻👇🏽👇🏾👇🏿Click on the image to take a look at the BreakingBad Official Website👇🏿👇🏾👇🏽👇🏻</i>
              </div>*/}

              <div className="container-img">
                <a href="https://www.sonypictures.com/tv/breakingbad" ><img src={logo} alt={logo}/></a>
              </div>
              <div className="container-wrap">
                <div className="container-homepage-sub">
                  <h3>🪰Do you know all the characters?⚗️🧪</h3>
                </div>
                <div className="section1-homepage">
                  <h1>🔒Login to access</h1>
                </div>
              </div>

          </div>

        </div>
      </div>
    </div>
  )
}