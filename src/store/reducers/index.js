import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import commentsReducer from "./commentsReducer";
import todoReducer from "./todoReducer";
import albumReducer from "./albumReducer";

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentsReducer,
  todos: todoReducer,
  albums: albumReducer
});

export default rootReducer;
