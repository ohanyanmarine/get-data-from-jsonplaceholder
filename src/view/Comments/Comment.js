import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { commentSelectors } from "../../store/selectors";
import { commentActions } from "../../store/action";

export default function Comment() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(commentSelectors.comments);
  const comment = useSelector(commentSelectors.comment);
  useEffect(() => {
    if (comments.length > 0) {
      dispatch(commentActions.selectComment(id, comments));
    }
  }, [id, comments]);
  return (
    <div className="right">
      <Link to={`/posts/${comment.postId}`}>
        <h3>Post {comment.postId}</h3>
      </Link>
      <h3>
        <i>{comment.name}</i>
      </h3>
      <p>email: {comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
}
