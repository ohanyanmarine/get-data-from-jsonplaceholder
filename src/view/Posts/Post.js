import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router";
import { Link } from "react-router-dom";
import { postActions } from "../../store/action";
import postSelectors from "../../store/selectors/postSelectors";
import User from "../Users/User";
import PostComments from "./PostComments";

export default function Post() {
  const dispatch = useDispatch();
  const posts = useSelector(postSelectors.posts);
  const post = useSelector(postSelectors.post);
  const { id } = useParams();
  const match = useRouteMatch();
  useEffect(() => {
    if (posts.length > 0) {
      dispatch(postActions.selectPost(id, posts));
    }
  }, [id, posts]);
  return (
    <div className="right">
      <Switch>
        <Route exact path={`${match.url}`}>
          <Link to={`/users/${post.userId}`}>
            <h2>User {post.userId}</h2>
          </Link>
          <h2>Post {post.id}</h2>
          <h3>Title: {post.title}</h3>
          <p>{post.body}</p>
          <hr />
          <h2>Comments</h2>
        </Route>
        <Redirect to="/users/:id" />
        <Route exact path={`${match.url}`}>
          <User />
        </Route>
      </Switch>
      <PostComments />
    </div>
  );
}
