import { postTypes } from "../types";

const setPosts = (posts) => {
  return {
    type: postTypes.SET_POSTS,
    payload: posts
  };
};

const selectPost = (id, posts) => {
  return {
    type: postTypes.SELECT_POST,
    payload: id,
    posts
  };
};

const filteredPosts = (posts) => {
  return {
    type: postTypes.FILTERED_POSTS,
    payload: posts
  };
};

export default { setPosts, selectPost, filteredPosts };
