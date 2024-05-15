import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import usersService from "../service/usersService";

export default function DataTableView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersService().then((data) => setUsers(data.data));
  }, []);

  return (
    <div className="card">
      <DataTable value={users} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="id"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="email"></Column>
        <Column field="phone" header="phone"></Column>
        <Column field="action" header="action"></Column>

      </DataTable>
    </div>
  );
}
