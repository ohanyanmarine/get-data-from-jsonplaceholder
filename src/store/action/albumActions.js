import { albumTypes } from "../types";

const setAlbums = (albums) => {
  return {
    type: albumTypes.SET_ALBUMS,
    payload: albums
  };
};

const selectAlbum = (id, albums) => {
  return {
    type: albumTypes.SELECT_ALBUM,
    payload: id,
    albums
  };
};

const setPhotos = (photos) => {
  return {
    type: albumTypes.SET_PHOTOS,
    payload: photos
  };
};
export default { setAlbums, selectAlbum, setPhotos };
