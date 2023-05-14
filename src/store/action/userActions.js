import { userTypes } from "../types";

const setUsers = (users) => {
  return {
    type: userTypes.SET_USERS,
    payload: users
  };
};

const selectUser = (id, posts) => {
  return {
    type: userTypes.SELECT_USER,
    payload: id,
    posts
  };
};

const changeUserName = (id, name) => {
  return {
    type: userTypes.CHANGE_USER_NAME,
    payload: { id: id, name: name }
  };
};

export default { setUsers, selectUser, changeUserName };
