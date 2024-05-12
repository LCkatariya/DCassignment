import {
  ADD_NEW_USER,
  DELET_USER_BY_ID,
  GET_ALL_USERS,
  UPDATE_USER_BY_ID,
} from "./Constants";

const initialState = [];

export const myTableReducer = (state = initialState, { type, payload }) => {
  //console.log("type, payload", type, payload)
  switch (type) {
    case GET_ALL_USERS:
      return payload;

    case ADD_NEW_USER:
      return [...state, ...payload];

    case UPDATE_USER_BY_ID:
      const updateUser = state.map((item) =>
        item.id === payload[0].id ? payload[0] : item
      );
      //   console.log(updateUser, payload[0]);
      return updateUser;

    case DELET_USER_BY_ID:
      const data = state.filter((item) => item.id !== payload[0].id);
      return data;

    default:
      return state;
  }
};
