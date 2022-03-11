import React, { useEffect, useState } from 'react'
import { BooksGridItem } from './BooksGridItem';

export const BooksGrid = ({category}) => {

  const [images, setImages] = useState([])

  useEffect( () => {
      getBooks();
  }, [])

  const getBooks = async () => {
    
    const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=2010-03-01&api-key=DmPfGencAa0jhxJQEluTZ3ouVSTfFEDq`;
    const resp = await fetch(url);
    const {results} = await resp.json();

    const books = results.lists.map(item => {
        return {
            id: item.list_id,
            title: item.list_name,
            url: item.list_image
        }
    })
    console.log(books)
    setImages(books);
  }


  return (
    <div>
    {category}

        {
            images.map( item => (
                <BooksGridItem 
                   key={item.id}
                   {...item}
                />
            ))
        }

    </div>
  )
}
