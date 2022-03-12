import React, {useState} from 'react'
import { AddCategory } from '../../ui/AddCategory';

import { CharactersGrid } from './CharactersGrid';

export const Characters = () => {

  const [categories, setCategories] = useState(['']);

  const handleAdd = () => {
    setCategories(
      [categories, ...categories],
    )
    }

  return (
    <div>
    <h1>Esta es la página de Characters</h1>
    <p>La finalidad de esta página es realizar la búsqueda de personajes de Breaking Bad por su nombre y devolver resultados</p>
    <AddCategory setCategories={setCategories}/>
    <hr />
    <button
      className="btn btn-outline-primary"
      onClick={handleAdd}
    >Submit</button>

      {categories.map(category=> (
        <CharactersGrid
          key={category}
          category={category} />
      ))}
    </div>
  )
}