import { commentTypes } from "../types";

const setComments = (comments) => {
  return {
    type: commentTypes.SET_COMMENTS,
    payload: comments
  };
};

const selectComment = (id, comments) => {
  return {
    type: commentTypes.SELECT_COMMENT,
    payload: id,
    comments
  };
};

const filteredComments = (comments) => {
  return {
    type: commentTypes.FILTERED_COMMENTS,
    payload: comments
  };
};

export default { setComments, selectComment, filteredComments };
