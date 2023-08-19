const countComments = async (data) => {
  const commentCountElement = document.getElementById('comment-counter');
  commentCountElement.textContent = `Comments(${data.length < 1 ? 0 : data.length})`;
};
export default countComments;
