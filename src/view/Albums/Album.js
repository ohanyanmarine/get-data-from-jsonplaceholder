import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import albumSelectors from "../../store/selectors/albumSelectors";
import { albumActions } from "../../store/action";
import api from "../../services/api";

export default function Album() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector(albumSelectors.albums);
  const album = useSelector(albumSelectors.album);
  const photos = useSelector(albumSelectors.photos);
  useEffect(() => {
    if (albums.length > 0) {
      dispatch(albumActions.selectAlbum(id, albums));
    }
    api
      .get(`/photos?albumId=${id}`)
      .then((res) => res.data)
      .then((data) => dispatch(albumActions.setPhotos(data)));
    // fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(albumActions.setPhotos(data));
    //   });
  }, [id, albums]);

  return (
    <div className="right">
      <h2>Album Title: {album.title}</h2>
      {photos.map((filteredPhoto, index) => (
        <div key={index}>
          <div className="list">
            <b>Photo title: {filteredPhoto.title}</b>
            <img src={filteredPhoto.url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
