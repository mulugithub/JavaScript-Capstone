import './style.css';
import { fetchCharacters, loadCharacters } from './modules/loadCharacters';

document.addEventListener('DOMContentLoaded', () => {
  fetchCharacters();
  loadCharacters();
});