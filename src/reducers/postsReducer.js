const postsReducer = (state = [], action) => {
  
    //used when a reducer expects multiple actions
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
//used when there can be only one action passed
//   if (action === "FETCH_POSTS") {
//     return action.payload;
//   }
//   return state;

export default postsReducer;
