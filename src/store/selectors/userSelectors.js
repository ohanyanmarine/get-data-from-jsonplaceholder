const mainSelector = (state) => state.users;

const users = (state) => mainSelector(state).users;
const selectedUser = (state) => mainSelector(state).selectedUser;
const user = (state) => mainSelector(state).selected;

export default {
  users,
  selectedUser,
  user
};
