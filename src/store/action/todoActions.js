import { todoTypes } from "../types";

const setTodos = (todos) => {
  return {
    type: todoTypes.SET_TODOS,
    payload: todos
  };
};
const selectTodo = (todos, id) => {
  return {
    type: todoTypes.SELECT_TODO,
    payload: todos,
    id
  };
};

const filteredTodos = (todos) => {
  return {
    type: todoTypes.FILTERED_TODOS,
    payload: todos
  };
};

export default { setTodos, selectTodo, filteredTodos };
