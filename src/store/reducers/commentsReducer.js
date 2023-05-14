import { commentTypes } from "../types";

const initState = {
  comments: [],
  selected: {},
  filteredComments: []
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case commentTypes.SET_COMMENTS:
      return { ...state, comments: payload };
    case commentTypes.SELECT_COMMENT:
      const comment = state.comments.find((item) => {
        return item.id === parseInt(payload);
      });
      return { ...state, selected: comment ? comment : {} };
    case commentTypes.FILTERED_COMMENTS:
      return { ...state, filteredComments: payload ? payload : [] };
    default:
      return state;
  }
};
