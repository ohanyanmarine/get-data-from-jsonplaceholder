import { userTypes } from "../types";
const initState = {
  users: [],
  selected: {}
};
export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userTypes.SET_USERS:
      return { ...state, users: payload };
    case userTypes.SELECT_USER:
      const user = state.users.find((item) => {
        return item.id === parseInt(payload);
      });
      return { ...state, selected: user ? user : {} };
    case userTypes.CHANGE_USER_NAME:
      const { id, name } = payload;
      const tmp = state.users.map((item) => {
        if (item.id === parseInt(id)) {
          item.username = name;
        }
        return { ...item };
      });
      return {
        ...state,
        users: tmp,
        selected: {
          ...state.selectedUser,
          username: name
        }
      };
    default:
      return state;
  }
};
