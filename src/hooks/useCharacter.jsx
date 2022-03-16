//import { CharactersGridItem } from '../components/characters/CharactersGridItem'

import { useState, useEffect } from "react";
import { getCharacters } from "../helpers/getCharacters";

export const useCharacter = (id) => {

    const [character, setCharacter] = useState()

    function getCharacters(id) {
        return fetch(
          `https://www.breakingbadapi.com/api/characters/${encodeURI(id)}`
        );
    }

    useEffect(() => {
        // Después de que el componente se monta, se ejecuta este callback
        getCharacters(id)
        .then((resp) => resp.json())
        .then(([body]) => {
            setCharacter(body)
        })
    }, [id]);

    return character;
}
