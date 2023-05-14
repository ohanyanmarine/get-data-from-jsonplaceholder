import { postTypes } from "../types";

const initState = {
  posts: [],
  selected: {},
  filteredPosts: []
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case postTypes.SET_POSTS:
      return { ...state, posts: payload };
    case postTypes.SELECT_POST:
      const post = state.posts.find((item) => {
        return item.id === parseInt(payload);
      });
      return { ...state, selected: post ? post : {} };
    case postTypes.FILTERED_POSTS:
      return { ...state, filteredPosts: payload ? payload : [] };
    default:
      return state;
  }
};
