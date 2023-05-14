import { albumTypes } from "../types";

const initState = {
  albums: [],
  selected: {},
  photos: []
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case albumTypes.SET_ALBUMS:
      return { ...state, albums: payload };
    case albumTypes.SELECT_ALBUM:
      const album = state.albums.find((item) => {
        return item.id === parseInt(payload);
      });
      return { ...state, selected: album ? album : {} };
    case albumTypes.SET_PHOTOS:
      return { ...state, photos: payload ? payload : [] };
    default:
      return state;
  }
};
