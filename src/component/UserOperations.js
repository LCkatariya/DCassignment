import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { getAddNewUser, getDeleteUserById, getUpdateUserById } from "../redux/operations";
import { useDispatch } from "react-redux";

const UserOperations = ({ users, userType, userId, modalOpen, onClose }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    if (userType === "edit_user") {
      setUserName(users[userId - 1]?.name);
      setUserEmail(users[userId - 1]?.email);
      setUserPhone(users[userId - 1]?.phone);
      setCity(users[userId - 1]?.address?.city);
      setZipcode(users[userId - 1]?.address?.zipcode);
    } else if (userType === "new_user") {
      setUserName("");
      setUserEmail("");
      setUserPhone("");
      setCity("");
      setZipcode("");
    }
  }, [userType]);

  const handleSubmit = () =>{
   if(userType==="edit_user"){
    const updateUser = [{id:userId, name:userName, email:userEmail, phone:userPhone, address:{city:city, zipcode:zipcode}}]
     dispatch(getUpdateUserById(updateUser))
     onClose()
   }else if(userType==="new_user"){//console.log("lal",userType)
    const newUser = [{id:userId, name:userName, email:userEmail, phone:userPhone, address:{city:city, zipcode:zipcode}}]
     dispatch(getAddNewUser(newUser))
     onClose()
   }else if(userType==="delete_user"){
    const deleteUser = [{id:userId}]
     dispatch(getDeleteUserById(deleteUser))
     onClose()
   }
  }

  return (
    <Modal
      isOpen={modalOpen}
      onClose={onClose}
      userType={userType}
      title={
        userType === "edit_user"
          ? "Update User"
          : userType === "new_user"
          ? "Add New User"
          : "Delete User"
      }
        handleSubmit={handleSubmit}
    >
      {userType !== "delete_user" ? (
        <>
          {" "}
          <div className="input-group mb-3">
            <span className="input-group-text">Id</span>
            <input
              type="text"
              className="form-control"
              value={userId}
              disabled={true}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">User Name</span>
            <input
              type="text"
              value={userName}
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">User Email</span>
            <input
              type="text"
              value={userEmail}
              className="form-control"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">User Phone</span>
            <input
              type="text"
              value={userPhone}
              className="form-control"
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">City</span>
            <input
              type="text"
              value={city}
              className="form-control"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Zip Code</span>
            <input
              type="text"
              value={zipcode}
              className="form-control"
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
        </>
      ) : (
        <div style={{padding:'30px', margin:'30px'}}>Are you sure you want delete this user?</div>
      )}
    </Modal>
  );
};

export default UserOperations;
