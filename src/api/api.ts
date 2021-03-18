export const SearchCharacter = async (searchTerm: string) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=2&name=${searchTerm}`)
    const data = await response.json();

    return data;

  } catch (error) {
    throw new Error(error);
  }
}
