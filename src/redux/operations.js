import { addUser, deleteUser, getUsers, updateUser } from "./actions";

export const getAllUsers = () => async(dispatch) =>{
  const url = `https://jsonplaceholder.typicode.com/users`;
  let users;
 try {
    const response = await fetch(url);
    users = await response.json();
 } catch (error) {
    users = [];
 } 
 dispatch(getUsers(users));
}

export const getAddNewUser = (userData) =>(dispatch) =>{
    dispatch(addUser(userData))
}
export const getUpdateUserById=(userData) =>(dispatch)=>{
    dispatch(updateUser(userData))
}
export const getDeleteUserById=(userData) =>(dispatch) =>{
    dispatch(deleteUser(userData))
}