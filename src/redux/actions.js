import {
  ADD_NEW_USER,
  DELET_USER_BY_ID,
  GET_ALL_USERS,
  UPDATE_USER_BY_ID,
} from "./Constants";

export const getUsers = (response) => {
  //console.log('response', response)
  return { type: GET_ALL_USERS, payload: response };
};

export const addUser = (response) => {
  return { type: ADD_NEW_USER, payload: response };
};

export const updateUser = (response) => {
  return { type: UPDATE_USER_BY_ID, payload: response };
};

export const deleteUser = (response) => {
  return { type: DELET_USER_BY_ID, payload: response };
};
