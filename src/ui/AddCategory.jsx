import React, { useState} from 'react'

import '../index.css'


export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState([''])


  const handleInputChange = (e) => {
        setInputValue(e.target.value);  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validación:
        if (inputValue.trim().length > 2) {
            setCategories (cats => [inputValue]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <span className="container-btn-submit">
            <button
                className="btn btn-submit"
                onClick={handleSubmit}
              >Submit</button>
            </span>

       </form>
    )
}
