import {
  addLike,
  loadCharacters,
  fetchCharacterDetails,
  updateModalContent,
} from './modules/loadCharacters.js';
import fetchComments from './modules/fetchComments.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadCharacters();

    const charactersContainer = document.querySelector('.all-characters');
    charactersContainer.addEventListener('click', async (event) => {
      if (event.target.classList.contains('fa-heart')) {
        event.stopImmediatePropagation();
        const characterId = event.target.getAttribute('data-id');
        event.target.classList.add('disabled');
        await addLike(characterId);
        event.target.classList.remove('disabled');
      }
    });
  } catch (error) {
    throw new Error('Error:', error);
  }

  const commentSpans = document.querySelectorAll('.comment');
  commentSpans.forEach((commentSpan) => {
    commentSpan.addEventListener('click', async () => {
      const characterId = commentSpan.getAttribute('data-id');
      const character = await fetchCharacterDetails(characterId);

      if (character) {
        const comments = await fetchComments('bteUMr9caK7j5e9t91ze', characterId);
        character.comments = comments;
        updateModalContent(character);
      }
    });
  });
});