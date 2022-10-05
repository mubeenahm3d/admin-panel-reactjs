import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Avatar } from "@mui/material";
import DataList from "../components/DataList";

function SubDealers() {
  const [data, setData] = useState("");

  useEffect(() => {
    api
      .post("/sub_dealers/list", ["sub_dealers", "cities"])
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const columns = [
    {
      field: "image_path",
      headerName: "",
      width: 60,
      renderCell: (params) => (
        <Avatar
          src="https://picsum.photos/50/50"
        >
          S
        </Avatar>
      ),
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "phone_number", headerName: "Phone #", width: 180 },
    { field: "cnic_id", headerName: "CNIC", width: 180 },
    { field: "city", headerName: "City", width: 180 },
    { field: "address", headerName: "Address", width: 300 },
  ];

  return <DataList columns={columns} rows={data} tableName="sub_dealers" header="Sub Dealers" />;
}

export default SubDealers;
