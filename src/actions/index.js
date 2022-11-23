import jsonPlaceholder from "../apis/jsonPlaceholder";

import _ from "lodash";

//creating a new action creator to solve the repitition problem
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //calling the older action creators manually since the redux store
  //will now call this new function
  await dispatch(fetchPosts());

  // 2 ways to write the following logic with lodash
  //-----------------------method 1-------------------------//
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  //-----------------------method 2-------------------------//
  //using _.chain
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

//without memoization (made 100 API calls)
export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
};

//implementing memoization (makes only 10 API calls)

// export const fetchUser = (id) => (dispatch) => _fetchUser(id,dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: res.data });
// });
