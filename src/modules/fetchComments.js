import countComments from './countComments';

const fetchComments = async (myAppId, characterId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const queryString = `?item_id=${characterId}`;
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${myAppId}/comments${queryString}`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch comments: ${errorMessage}`);
    }

    const data = await response.json();
    countComments(data);

    return data.map((comment) => {
      const formattedDate = new Date(comment.creation_date).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
      });
      return `${formattedDate} ${comment.username}: ${comment.comment}`;
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchComments;