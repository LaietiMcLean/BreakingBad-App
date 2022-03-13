

export const getCharacters = async (category) => {
    
    const url = `https://www.breakingbadapi.com/api/characters?name=${encodeURI(category)}`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)

    const characters = data.map(item => {
      return {
          id: item.char_id,
          title: item.name,
          url: item.img,
      }
  })
    return characters;
  }