const postsReducer = (oldPosts = [], action) => {
  if (action === "FETCH_POSTS") {
    return action.payload;
  }
  return oldPosts;
};

export default postsReducer;
