import React, { useEffect, useState } from 'react'
import { CharactersGridItem } from './CharactersGridItem';

export const CharactersGrid = ({category}) => {

  const [images, setImages] = useState([])

  useEffect( () => {
      getCharacters();
  }, [])

    const getCharacters = async () => {
    
    const url = `https://www.breakingbadapi.com/api/characters?name=${encodeURI(category)}`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)

    const characters = data.map(item => {
      return {
          id: item.char_id,
          title: item.name,
          url: item.img,
      }
  })

    setImages(characters);
  }

  return (
    <div>
    <h3>{category}</h3>
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
