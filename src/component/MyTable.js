import React, { useState } from "react";
import UserOperations from "./UserOperations";

const MyTable = ({ users }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState("");
  const [userId, setUserId] = useState(null);


  const handleModalOpen = (id, userType) => {
    setModalOpen(true);
    setUserId(id);
    setUserType(userType)
  };

  const ganeretNewId = () => users?.length>0 ? (users[users?.length-1].id)+1 : 1

  return (
    <div className="App container mt-3">
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Zip Code</th>
            <th scope="col">
              {" "}
              <button onClick={() => handleModalOpen(ganeretNewId(), 'new_user')}>Add New</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length > 0 &&
            users.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <th scope="col">
                  <i
                    className="bi bi-trash p-1 cursor-pointer"
                    onClick={() => handleModalOpen(item.id, 'delete_user')}
                  ></i>{" "}
                  <i
                    className="bi bi-pencil p-1 cursor-pointer"
                    onClick={()=>handleModalOpen(item.id, 'edit_user')}
                  ></i>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
      {users.length===0?<h3>Data Not Found</h3>:<></>}
      <UserOperations
        users={users}
        userType={userType}
        userId={userId}
        onClose={()=>setModalOpen(false)}
        modalOpen={modalOpen}
      />
    </div>
  );
};

export default MyTable;
