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
              <i> ππ»ππ½ππΎππΏClick on the image to take a look at the BreakingBad Official WebsiteππΏππΎππ½ππ»</i>
              </div>*/}

              <div className="container-img">
                <a href="https://www.sonypictures.com/tv/breakingbad" ><img src={logo} alt={logo}/></a>
              </div>
              <div className="container-wrap">
                <div className="container-homepage-sub">
                  <h3>πͺ°Do you know all the characters?βοΈπ§ͺ</h3>
                </div>
                <div className="section1-homepage">
                  <h1>πLogin to access</h1>
                </div>
              </div>

          </div>

        </div>
      </div>
    </div>
  )
}