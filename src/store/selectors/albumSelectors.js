const albumSelectors = (state) => state.albums;

const albums = (state) => albumSelectors(state).albums;
const selectAlbum = (state) => albumSelectors(state).selectAlbum;
const album = (state) => albumSelectors(state).selected;
const photos = (state) => albumSelectors(state).photos;

export default { albums, selectAlbum, album, photos };
