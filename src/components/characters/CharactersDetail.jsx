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
    <h3>{characters.name}</h3>
    <img src={characters.img} className="card-img-top" alt={characters.name} style={{ width: '270px', height: '250px'}}></img>
    <p>Birthday: {characters.birthday}</p>
    <p>Nickname: {characters.nickname}</p>
    {/*<p>Occupation: {characters.occupation}</p>*/}
    <p>Occupation: 
    {
      occ.map(item => (
        <li key={item.occ}
        >{item}</li>
      ))
    }
    </p>
    <p>Status: {characters.status}</p>

    </div>
  </div>
  )

}
