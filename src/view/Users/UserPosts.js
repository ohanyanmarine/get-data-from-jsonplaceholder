import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router";
import api from "../../services/api";
import { postActions } from "../../store/action";
import postSelectors from "../../store/selectors/postSelectors";

export default function UserPosts() {
  const { id } = useParams();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const filteredPosts = useSelector(postSelectors.filteredPosts);
  useEffect(() => {
    api
      .get(`/posts?userId=${id}`)
      .then((res) => res.data)
      .then((data) => dispatch(postActions.filteredPosts(data)));
    // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(postActions.filteredPosts(data));
    //   });
  }, [match.url, id]);
  return (
    <div>
      {filteredPosts.map((filteredPost, index) => (
        <div className="list" key={index}>
          <div>
            <b>{filteredPost.title}</b>
            <p>{filteredPost.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
