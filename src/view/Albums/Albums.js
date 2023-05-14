import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { albumActions } from "../../store/action";
import albumSelectors from "../../store/selectors/albumSelectors";
import Album from "./Album";

export default function Albums() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const albums = useSelector(albumSelectors.albums);
  useEffect(() => {
    api
      .get(`/albums`)
      .then((res) => res.data)
      .then((data) => dispatch(albumActions.setAlbums(data)));
    // fetch(`https://jsonplaceholder.typicode.com/albums`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(albumActions.setAlbums(data));
    //   });
  }, []);

  return (
    <div className="wrapper">
      <div className="left">
        {albums.map((album) => (
          <div className="list">
            <Link to={`${match.url}/${album.id}`}>
              <div>
                <h3>Title: {album.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Switch>
        <Route path="/albums/:id" component={Album}></Route>
      </Switch>
    </div>
  );
}
