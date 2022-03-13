import React, { useEffect, useState } from 'react'
import { getCharacters } from '../../helpers/getCharacters';
import { CharactersGridItem } from './CharactersGridItem';

export const CharactersGrid = ({category}) => {

  const [images, setImages] = useState([])

  useEffect( () => {
      getCharacters(category)
        .then(setImages)
  }, [category])

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            images.map( item => (
                <CharactersGridItem 
                   key={item.id}
                   {...item}
                />
            ))
        }
    </div>
  )
}
