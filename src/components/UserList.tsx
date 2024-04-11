import React from "react";
import useFetch from "../customHook/useFetch";
import { User } from "../interfaces/Users";
import { table } from "console";

const UserList = () => {
  const { data, isPending, error } = useFetch(
    "https://fakestoreapi.com/users?sort=asc"
  );
  console.log(data);
  return (
    <>
      <div className="usersTitle">All our Users!</div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading users...</div>}
      <table className="userTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el: User) => {
              return (
                <tr key={el.id}>
                  <td>{el.name.firstname}</td>
                  <td>{el.name.lastname}</td>
                  <td>{el.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
