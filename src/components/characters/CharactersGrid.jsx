import { useFetchCharacters } from '../../hooks/useFetchCharacters';
import { CharactersGridItem } from './CharactersGridItem';

export const CharactersGrid = ({category}) => {

  const {data: images, loading} = useFetchCharacters(category);

  return (
    <>
    {loading ? <p className="alert alert-info text-center animate__animated">Loading...</p> : null}

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
