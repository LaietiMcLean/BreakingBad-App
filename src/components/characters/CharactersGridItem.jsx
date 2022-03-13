import React from 'react'

import '../../index.css'

export const CharactersGridItem = ({title, url}) => {


  return (
    <div className="card-global">
    <span className="col">
      <span className="card" style={{width: '10rem'}}>
        <span className="row">
          <img src={url} className="card-img-top" alt={title} style={{ width: '250px', height: '200px'}}></img>
          <h6 className="card-title">{title}</h6>
        </span>
      </span>
    </span>
  </div>

  )
}
