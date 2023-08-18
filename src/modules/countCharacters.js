import fetchCharacters from './fetchCharacters';

const countCharacters = async () => {
  const characters = await fetchCharacters();
  const characterCountElement = document.getElementById('character-count');
  characterCountElement.textContent = `Characters(${characters.length})`;
};

export default countCharacters;