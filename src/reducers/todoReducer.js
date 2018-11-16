import { FETCH_DATA } from "../action/types";
const initialState = {
  todo_list: [],
  new_todo: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        todo_list: action.payload
      };
    default:
      return state;
  }
};
