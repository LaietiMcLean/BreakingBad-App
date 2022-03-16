import React, {useState} from 'react'
import { AddCategory } from '../../ui/AddCategory';

import { CharactersGrid } from './CharactersGrid';

export const Characters = () => {

  const [categories, setCategories] = useState(['']);

  return (
    <div className="container">
      <div className="container-section">
      <div className="prueba-seccion">
        <h1>Esta es la página de Characters</h1>
        <p>La finalidad de esta página es realizar la búsqueda de personajes de Breaking Bad por su nombre y devolver resultados</p>
            <AddCategory setCategories={setCategories}/>
      </div>
         
                {categories.map(category=> (
              <CharactersGrid
                key={category}
                category={category} />
              ))}
      </div>
    </div>
  )
}