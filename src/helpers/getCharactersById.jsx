//import { CharactersGridItem } from '../components/characters/CharactersGridItem'

import { useState } from "react";

export const Characterss = (CharactersGridItem) => {

  const {id} = CharactersGridItem;
    //const arrURL = window.location.href.split("/")
    //const idCharacter = arrURL[arrURL.length -1]
    /*idCharacter = id;
    console.log(id);*/

    const [idCharacter, setIdCharacter] = useState({id})

    const handleIdChange = (id) => {
      const arrURL = window.location.href.split("/")
      const idCharacter = arrURL[arrURL.length -1]
      setIdCharacter(id = idCharacter)
    }
 
  const xPrueba = async (idCharacter) => {
    const newUrl = `https://www.breakingbadapi.com/api/characters/${encodeURI(id)}`;
    const resp = await fetch(newUrl);
    const data = await resp.json();
    console.log(data);
}

    const characterDetails = xPrueba.map(item => {

        return {
    
            id: item.char_id,
            title: item.name,
            url: item.img,
            nickname: item.nickname,
            bday: item.birthay,
            occupation: item.occupation,
            status: item.status 
    }
   
    })
  return characterDetails;

}
