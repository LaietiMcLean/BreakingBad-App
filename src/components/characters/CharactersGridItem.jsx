import React from 'react'

export const CharactersGridItem = ({id, title, url}) => {



  return (
    <div>
        <p>{title}</p>
        <img src={url} alt={title} />
    </div>
  )
}
