import React from 'react'


import '../../index.css'



export const CharactersDetailGridItem = ({id, title, url}) => {


    return (
      <div className="card-global">
      <span className="col">
        <span className="card" style={{width: '10rem'}}>
          <span className="row">
            <p>{id}</p>
            <img src={url} className="card-img-top" alt={title} style={{ width: '270px', height: '250px'}}></img>
            <h6 className="card-title">{title}</h6>

          </span>
        </span>
      </span>
    </div>
  
    )
  }