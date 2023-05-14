import { todoTypes } from "../types";

const initState = {
  todos: [],
  selected: {},
  filteredTodos: []
};
export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case todoTypes.SET_TODOS:
      return { ...state, todos: payload };
    case todoTypes.SELECT_TODO:
      const todo = state.todos.find((item) => {
        return item.id === parseInt(payload);
      });
      return { ...state, selected: todo ? todo : {} };
    case todoTypes.FILTERED_TODOS:
      return { ...state, filteredTodos: payload ? payload : [] };
    default:
      return state;
  }
};
