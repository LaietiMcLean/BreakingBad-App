import { useFetchCharacters } from '../../hooks/useFetchCharacters';
import { CharactersGridItem } from './CharactersGridItem';

export const CharactersGrid = ({category}) => {

  const {data: images, loading} = useFetchCharacters(category);

  return (
    <>
    {loading ? <p className="animate__animated animate__flash">Loading...</p> : null}

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
    </>
  )
}
