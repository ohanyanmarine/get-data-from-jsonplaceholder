const todoSelectors = (state) => state.todos;

const todos = (state) => todoSelectors(state).todos;
const selectedTodo = (state) => todoSelectors(state).selectedTodo;
const todo = (state) => todoSelectors(state).selected;
const filteredTodos = (state) => todoSelectors(state).filteredTodos;

export default { todos, selectedTodo, todo, filteredTodos };
