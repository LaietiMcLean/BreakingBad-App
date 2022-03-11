import React, {useState} from 'react'
import { AddCategory } from '../../ui/AddCategory';

import '../books/books.css'
import { BooksGrid } from './BooksGrid';


export const Books = () => {

  const [categories, setCategories] = useState(['']);

  const handleAdd = () => {
    setCategories(
      [categories, ...categories],
    )
    }

  return (
    <div>
    <h1>Esta es la página de Books</h1>
    <p>La finalidad de esta página es realizar la búsqueda de libros por título y devolver resultados</p>
    <AddCategory setCategories={setCategories}/>
    <hr />
    <button
      className="btn btn-outline-primary"
      onClick={handleAdd}
    >Submit</button>
    <ol>
      {categories.map(category=> (
        <BooksGrid 
          key={category}
          category={category} />
      ))}
    </ol>   
    </div>
  )
}