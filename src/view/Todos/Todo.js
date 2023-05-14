import { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router";
import { Link } from "react-router-dom";
import User from "../Users/User";
import { useSelector, useDispatch } from "react-redux";
import { todoSelectors } from "../../store/selectors";
import { todoActions } from "../../store/action";

export default function Todo() {
  const { id } = useParams();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.todos);
  const todo = useSelector(todoSelectors.todo);

  useEffect(() => {
    if (todos.length > 0) {
      dispatch(todoActions.selectTodo(id, todos));
    }
  }, [id, todos]);
  return (
    <div className="right">
      <Switch>
        <Route exact path={`${match.url}`}>
          <Link to={`/users/${todo.userId}`}>
            <h3>
              <i>User {todo.userId}</i>
            </h3>
          </Link>
          <h3>
            Todo {todo.id} - {todo.title}
          </h3>
        </Route>
        <Redirect to="/users/:id" />
        <Route exact path={`${match.url}`}>
          <User />
        </Route>
      </Switch>
    </div>
  );
}
