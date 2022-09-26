import * as actionTypes from '../actions/actionTypes';

const initTodos = {
  create: [],
  load: []
};

function todos(state = initTodos, action) {
  switch (action.type) {
    case actionTypes.TODO.ADD:
      return {
        ...state,
        create: [
          {
            id: Date.now(),
            text: action.text,
            completed: action.completed
          },
          ...state.create
        ]
      };

    case actionTypes.TODO.TOGGLE:
      return {
        create: toggleTodos(state.create, action.id),
        load: toggleTodos(state.load, action.id)
      };

    case actionTypes.TODO.DELETE:
      return {
        create: deleteTodo(state.create, action.id),
        load: deleteTodo(state.load, action.id)
      }

    case actionTypes.API.LOAD_TODOS:
        let loadTodos = action.items.map(item => ({ id: item.id, text: item.title, completed: item.completed }));
      return {
        ...state,
        load: loadTodos
      };

    default:
      return state;
  }
}

function toggleTodos(todos, id) {
  return todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

function deleteTodo(todos, id) {
  return todos.filter(todo => todo.id !== id);
}

export default todos;
