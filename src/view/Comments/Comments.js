import { useEffect } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Comment from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import { commentSelectors } from "../../store/selectors";
import { commentActions } from "../../store/action";
import api from "../../services/api";

export default function Comments() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const comments = useSelector(commentSelectors.comments);
  useEffect(() => {
    if (comments.length === 0) {
      api
        .get(`/comments`)
        .then((res) => res.data)
        .then((data) => dispatch(commentActions.setComments(data)));
      // fetch(`https://jsonplaceholder.typicode.com/comments`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     dispatch(commentActions.setComments(data));
      //   });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="left">
        {comments.map((comment, index) => (
          <div className="list" key={index}>
            <h3>Post {comment.postId}</h3>
            <Link to={`${match.url}/${comment.id}`}>
              <h3>
                Name: <i>{comment.name}</i>
              </h3>
            </Link>
            <p>email: {comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <Switch>
        <Route exact path={`${match.url}/:id`} component={Comment}></Route>
      </Switch>
    </div>
  );
}
