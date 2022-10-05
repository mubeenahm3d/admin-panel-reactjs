import React, { useState } from "react";
import api from "../api/api";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { alertActions } from "../store/alertSlice";
import { useNavigate } from "react-router";

function DataList(props) {
  const [selectedIDs, setSelectedIDs] = useState("");
  const [remainingRows, setRemainingRows] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  console.log("props", props.columns)

  const addClickHandler = () => {
    navigate(`/admin/${props.tableName}/add`)
  };
  const deleteClickHandler = () => {
    api
      .post(`/${props.tableName}/delete`, {
        tableName: props.tableName,
        values: selectedIDs,
      })
      .then((res) => {
        dispatch(alertActions.setAlert(res.data.message));
        const newRows = props.rows.filter(
          (row) => !selectedIDs.includes(row.id)
        );
        setRemainingRows(newRows);
      });
  };

  const doubleClickHandler = (row) => {
    console.log("row info", row)
    navigate(`/admin/${props.tableName}/detail`, {state: {header: props.header, row: row}})
  }

  return (
    <StyledDealers>
      <div className="heading-text">
        <h1 className="header">{props.header} List</h1>
        <div>
          <Button variant="outlined" size="small" onClick={addClickHandler}>
            Add New {props.header}
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={deleteClickHandler}
            disabled={selectedIDs.length === 0}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="container">
        <DataGrid
          columns={props.columns}
          rows={remainingRows !== "" ? remainingRows : props.rows}
          checkboxSelection
          autoHeight
          onSelectionModelChange={(ids) => {
            setSelectedIDs(ids);
          }}
          onRowDoubleClick={doubleClickHandler}
        />
      </div>
    </StyledDealers>
  );
}

const StyledDealers = styled.div`
  padding: 4.8rem;
  .heading-text {
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    .header {
      color: var(--heading);
    }
    div * {
      margin-left: 1rem;
    }
  }
  .container {
  }
`;

export default DataList;
