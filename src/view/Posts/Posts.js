import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { postActions } from "../../store/action";
import { postSelectors } from "../../store/selectors";
import Post from "./Post";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(postSelectors.posts);
  const match = useRouteMatch();

  useEffect(() => {
    if (posts.length === 0) {
      api
        .get(`/posts`)
        .then((res) => res.data)
        .then((data) => dispatch(postActions.setPosts(data)));
      // fetch(`https://jsonplaceholder.typicode.com/posts`)
      //   .then((response) => response.json())
      //   .then((data) => dispatch(postActions.setPosts(data)));
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="left">
        {posts.map((post, index) => (
          <div key={index} className="list">
            <Link to={`${match.url}/${post.id}`}>
              <h3>Post {post.id}</h3>
              <h4> {post.title}</h4>
            </Link>
          </div>
        ))}
      </div>
      <Switch>
        <Route exact path={`${match.url}/:id`} component={Post}></Route>
      </Switch>
    </div>
  );
}
