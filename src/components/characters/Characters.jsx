import React, {useState} from 'react'
import { AddCategory } from '../../ui/AddCategory';

import { CharactersGrid } from './CharactersGrid';

export const Characters = () => {

  const [categories, setCategories] = useState(['']);

  return (
    <div className="container">
      <div className="container-section">
      <div className="prueba-seccion">
        <h1>Look for your character</h1>
        <h4>And click below to see details</h4>
    
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