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
import { userActions } from "../../store/action";
import { userSelectors } from "../../store/selectors";
import postSelectors from "../../store/selectors/postSelectors";
import UserPosts from "./UserPosts";
import UserTodos from "./UserTodos";

export default function User() {
  const dispatch = useDispatch();
  const users = useSelector(userSelectors.users);
  const user = useSelector(userSelectors.user);
  const posts = useSelector(postSelectors.posts);
  const { id } = useParams();
  const match = useRouteMatch();
  useEffect(() => {
    if (users.length > 0) {
      dispatch(userActions.selectUser(id, posts));
    }
  }, [id, users]);

  return (
    <div className="right">
      <h2>User {user.username}</h2>
      <h3>Name: {user.name}</h3>
      <p>Web site: {user.website}</p>
      <i>email: {user.email}</i>
      <p>Phone: {user.phone}</p>
      <hr />
      <button
        onClick={() => {
          console.log("must change name ");
          dispatch(userActions.changeUserName(id, "Jane"));
        }}
      >
        Change Name
      </button>
      <div className="userInfoNext">
        <Link to={`${match.url}/posts`}>Posts</Link>
        <Link to={`${match.url}/todos`}>Todos</Link>
      </div>
      <hr />
      <Switch>
        <Route path={`${match.path}/posts`}>
          <UserPosts />
        </Route>
        <Route path={`${match.path}/todos`}>
          <UserTodos />
        </Route>
        <Route>
          <Redirect to={`${match.url}/posts`} />
        </Route>
      </Switch>
    </div>
  );
}
