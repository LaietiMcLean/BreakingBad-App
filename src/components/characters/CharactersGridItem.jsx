import React from 'react'
import { Link } from 'react-router-dom'

import '../../index.css'

export const CharactersGridItem = ({id, title, url}) => {


  return (
    <div className="card-global">
    <span className="col">
      <span className="card" style={{width: '10rem'}}>
        <span className="row">
          <img src={url} className="card-img-top" alt={title} style={{ width: '270px', height: '250px'}}></img>
          <h6 className="card-title">{title}</h6>
          <Link
          className="card-body"
            to={`/Characters/${id}`}
          >
            Details...
          </Link>
        </span>
      </span>
    </span>
  </div>

  )
}
