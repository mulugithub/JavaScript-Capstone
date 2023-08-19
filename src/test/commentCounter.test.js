import countComments from '../modules/countComments';
import fetchComments from '../modules/fetchComments';

// Mock the fetch function
global.fetch = jest.fn();

describe('countComments', () => {
  it('should update the comment count element with the correct count', () => {
    // Arrange
    document.body.innerHTML = '<div id="comment-counter"></div>';
    const data = [
      { id: 1, comment: 'Great post!', username: 'user1' },
      { id: 2, comment: 'Nice work!', username: 'user2' },
    ];

    // Act
    countComments(data);

    // Assert
    const commentCountElement = document.getElementById('comment-counter');
    expect(commentCountElement.textContent).toBe(`Comments(${data.length})`);
  });
});

describe('fetchComments', () => {
  afterEach(() => {
    fetch.mockClear();
  });
  it('should fetch comments successfully and return the data', async () => {
    // Arrange
    const mockAppId = 'mockAppId';
    const mockCharacterId = 'mockCharacterId';
    const mockData = [
      {
        id: 1, comment: 'Great post!', username: 'user1', creation_date: '2023-08-18',
      },
      {
        id: 2, comment: 'Nice work!', username: 'user2', creation_date: '2023-08-19',
      },
    ];
    const mockResponse = { ok: true, json: jest.fn().mockResolvedValue(mockData) };
    fetch.mockResolvedValue(mockResponse);

    // Act
    const result = await fetchComments(mockAppId, mockCharacterId);

    // Assert
    expect(fetch).toHaveBeenCalledWith(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${mockAppId}/comments?item_id=${mockCharacterId}`,
    );
    const expectedFormattedData = [
      '8/18/2023 user1: Great post!',
      '8/19/2023 user2: Nice work!',
    ];
    expect(result).toEqual(expectedFormattedData);
  });

  it('should throw an error if fetching comments fails', async () => {
    // Arrange
    const mockAppId = 'mockAppId';
    const mockCharacterId = 'mockCharacterId';
    const mockErrorMessage = 'Failed to fetch comments';
    const mockResponse = { ok: false, text: jest.fn().mockResolvedValue(mockErrorMessage) };
    fetch.mockResolvedValue(mockResponse);

    // Act and Assert
    await expect(async () => {
      await fetchComments(mockAppId, mockCharacterId);
    }).rejects.toThrowError(`Failed to fetch comments: ${mockErrorMessage}`);
  });
});