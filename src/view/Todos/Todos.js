import { useEffect } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/action";
import { todoSelectors } from "../../store/selectors";
import api from "../../services/api";

export default function Todos() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.todos);
  useEffect(() => {
    if (todos.length === 0) {
      api
        .get(`/todos`)
        .then((res) => res.data)
        .then((data) => dispatch(todoActions.setTodos(data)));
      //   fetch(`https://jsonplaceholder.typicode.com/todos`)
      //     .then((response) => response.json())
      //     .then((data) => dispatch(todoActions.setTodos(data)));
    }
  }, []);
  return (
    <div className="wrapper">
      <div className="left">
        {todos.map((todo, index) => (
          <div className="list" key={index}>
            <Link to={`${match.url}/${todo.id}`}>
              <h3>{todo.title}</h3>
              <p>ID {todo.id}</p>
            </Link>
            <p>Completed: {todo.completed.toString()}</p>
          </div>
        ))}
      </div>
      <Switch>
        <Route exact path={`${match.url}/:id`} component={Todo}></Route>
      </Switch>
    </div>
  );
}
