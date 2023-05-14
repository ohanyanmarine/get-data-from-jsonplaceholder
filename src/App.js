import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home, Users, Posts, Todos, Albums, Comments, NotFound } from "./view";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/comments" component={Comments}></Route>
          <Route path="/todos" component={Todos}></Route>
          <Route path="/albums" component={Albums}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}
