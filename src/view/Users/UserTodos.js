import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router";
import api from "../../services/api";
import { todoActions } from "../../store/action";
import { todoSelectors } from "../../store/selectors";

export default function UserTodos() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const filteredTodos = useSelector(todoSelectors.filteredTodos);

  useEffect(() => {
    api
      .get(`/todos?userId${id}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch(todoActions.filteredTodos(data));
      });
    // fetch(`https://jsonplaceholder.typicode.com/todos?userId${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(todoActions.filteredTodos(data));
    //   });
  }, [match.url, id]);

  return (
    <div>
      {filteredTodos.map((filteredTodo, index) => (
        <div className="list" key={index}>
          <div className="listTodos">
            <b>{filteredTodo.title}</b>
            <p>Completed: {filteredTodo.completed.toString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
