import React from 'react'
import { useFetchCharacters } from '../../hooks/useFetchCharacters';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';

export const CharactersDetail = () => {


  const { id } = useParams()

  const {data: loading} = useFetchCharacters(id);
  const characters = useCharacter(id)

  if (!characters) {
    return loading ? <p className="animate__animated">Loading...</p> : null;
  }

  console.table(characters)

  const occ = characters.occupation;
  console.log(occ)
  return (
    <div className="container">
    <div className="container-section">
      <div className="card-detail">

        <div className="card-title-item">
          <h3>{characters.name}</h3>
        </div>  

          <div className="card-img">
            <img src={characters.img} className="card-img-top" alt={characters.name} style={{ width: '200px', height: '250px'}}></img>
          </div>
          
          <h4 className="text-details">Birthday:</h4> <p>{characters.birthday}</p>
          <h4 className="text-details">Nickname:</h4> <p>{characters.nickname}</p>
          <h4 className="text-details">Occupation:</h4> 
          <p>
              {
                occ.map(item => (
                <li key={item.occ}
                >{item}</li>
                ))
              }
          </p>
          <h4 className="text-details">Status:</h4> <p>{characters.status}</p>
          <h4 className="text-details">Portrayed:</h4> <p>{characters.portrayed}</p>

      </div>
  </div>
  </div>
  )

}
