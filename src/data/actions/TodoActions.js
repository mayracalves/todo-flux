import AppDispacher from "../dispatcher/AppDispatcher";
import TodoCostants from "../constants/TodoConstants";

const TodoActions = {
  create(description) {
    AppDispacher.dispatch({
      actionType: TodoCostants.TODO_CREATE,
      description,
    });
  },

  update(item) {
    AppDispacher.dispatch({
      actionType: TodoCostants.TODO_UPDATE,
      item,
    });
  },

  remove(id) {
    AppDispacher.dispatch({
      actionType: TodoCostants.TODO_REMOVE,
      id,
    });
  },

  clear() {
    AppDispacher.dispatch({
      actionType: TodoCostants.TODO_CLEAR,
    });
  },
};

export default TodoActions;