import { useEffect, useState } from "react";

import { getCharacters } from "../helpers/getCharacters";


export const useFetchCharacters = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getCharacters(category)
            .then(item => {
                setTimeout( () => {
                    setState({
                        data: item,
                        loading: false
                    });
                }, 1000)
            })

    }, [category])

    return state;
    
}

