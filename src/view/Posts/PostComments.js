import { useEffect } from "react";
import { useParams, useRouteMatch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { commentActions } from "../../store/action";
import { commentSelectors } from "../../store/selectors";
import api from "../../services/api";

export default function UserPosts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const filteredComments = useSelector(commentSelectors.filteredComments);
  useEffect(() => {
    api
      .get(`/comments?postId=${id}`)
      .then((res) => res.data)
      .then((data) => dispatch(commentActions.filteredComments(data)));
    // fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(commentActions.filteredComments(data));
    //   });
  }, [match.url, id]);

  return (
    <div>
      {filteredComments.map((filteredComment, index) => (
        <div key={index}>
          <div className="list">
            <b>{filteredComment.name}</b>
            <p>{filteredComment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
