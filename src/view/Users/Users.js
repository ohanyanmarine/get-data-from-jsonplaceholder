import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { userActions } from "../../store/action";
import { userSelectors } from "../../store/selectors";
import User from "./User";
import api from "../../services/api";

export default function Users() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const users = useSelector(userSelectors.users);
  useEffect(() => {
    if (users.length === 0) {
      api
        .get("/users")
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          dispatch(userActions.setUsers(data));
        })
        .catch((error) => {
          console.log(error.request);
        });
      //   fetch(`https://jsonplaceholder.typicode.com/users`)
      //     .then((response) => response.json())
      //     .then((data) => {
      //       dispatch(userActions.setUsers(data));
      //     });
    }
  }, []);
  return (
    <div className="wrapper">
      <div className="left">
        {users.map((user, index) => (
          <div className="list" key={index}>
            <Link to={`${match.url}/${user.id}`}>
              <div>
                <h3>{user.username}</h3>
                <p>City: {user.address.city}</p>
                <p>Company Name: {user.company.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Switch>
        <Route path="/users/:id" component={User}></Route>
      </Switch>
    </div>
  );
}
