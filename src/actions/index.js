import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: res });
};

//   return async function (dispatch, getState) {
//     const response = await jsonPlaceholder.get("/posts");
//     dispatch({ type: "FETCH_POSTS", payload: response });
//   };
