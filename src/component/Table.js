import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import usersService from "../service/usersService";
import { useEffect, useState } from "react";
function Table() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersService()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const removeUser = (id) => {
    console.log(id);
    let newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
  };
  return (
    <div className="surface-0 col-8 flex flex-column justify-content-center align-items-center w-10">
      <div className="font-medium text-3xl text-900 mb-3">
        Movie Information
      </div>
      <div className="text-500 mb-5">
        Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit
        rutrum.
      </div>
      <ul className="list-none p-0 m-0">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap"
            >
              <div className="text-500 w-6 md:w-2 font-medium">{user.name}</div>
              <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                {user.email}
              </div>
              <div className="w-6 md:w-2 flex justify-content-end">
                <Button
                  label="Delete"
                  icon="pi pi-pencil"
                  className="p-button-text"
                  onClick={() => {
                    removeUser(user.id);
                  }}
                />
              </div>
            </li>
          );
        })}
        <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
          <div className="text-500 w-6 md:w-2 font-medium">Plot</div>
          <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
            A group of professional bank robbers start to feel the heat from
            police when they unknowingly leave a clue at their latest heist.
          </div>
          <div className="w-6 md:w-2 flex justify-content-end">
            <Button
              label="Delete"
              icon="pi pi-pencil"
              className="p-button-text"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Table;
