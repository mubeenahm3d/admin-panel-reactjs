import React, { useEffect, useState } from "react";
import api from "../api/api";
import DataList from "../components/DataList";

function Shops() {
  const [data, setData] = useState("");

  useEffect(() => {
    api
      .post("/shops/list", ["shops", "cities"])
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
        
      });
  }, []);

  const columns = [
    { field: "name", headerName: "Shop Name", width: 200 },
    { field: "owner_type", headerName: "Owner Type", width: 180 },
    { field: "city", headerName: "City", width: 180 },
    { field: "address", headerName: "Address", width: 300 },
  ];

  return <DataList columns={columns} rows={data} tableName="shops" header="Shops" />;
}

export default Shops;
