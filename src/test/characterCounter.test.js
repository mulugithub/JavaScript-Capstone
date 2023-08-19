import fetchCharacters from '../modules/fetchCharacters';
import countCharacters from '../modules/countCharacters';

jest.mock('../modules/fetchCharacters', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('countCharacters', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update the character count element with the correct count', async () => {
    // Arrange
    document.body.innerHTML = '<div id="character-count"></div>';
    const mockCharacters = [
      { id: 1, name: 'Rick Sanchez' },
      { id: 2, name: 'Morty Smith' },
    ];
    fetchCharacters.mockResolvedValue(mockCharacters);

    // Act
    await countCharacters();

    // Assert
    const characterCountElement = document.getElementById('character-count');
    expect(characterCountElement.textContent).toBe(`Characters(${mockCharacters.length})`);
    expect(fetchCharacters).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if fetching characters fails', async () => {
    // Arrange
    document.body.innerHTML = '<div id="character-count"></div>';
    const error = new Error('Failed to fetch characters');
    fetchCharacters.mockRejectedValue(error);

    // Act and Assert
    await expect(countCharacters()).rejects.toThrow('Failed to fetch characters');
    expect(fetchCharacters).toHaveBeenCalledTimes(1);
  });

  it('should set character count to zero', async () => {
    // Arrange
    document.body.innerHTML = '<div id="character-count"></div>';
    fetchCharacters.mockResolvedValue([]);

    // Act
    await countCharacters();

    // Assert
    const characterCountElement = document.getElementById('character-count');
    expect(characterCountElement.textContent).toBe('Characters(0)');
    expect(fetchCharacters).toHaveBeenCalledTimes(1);
  });
});