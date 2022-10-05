import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import { useNavigate } from "react-router";

function AddDealer() {
  const [form, setForm] = useState();
  const navigate = useNavigate()

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log("form", form)
  };
  const submitHandler = (event) => {
      event.preventDefault()
      setForm({
          ...form,
          city_id: 1,
          dealer_id: 23,
          qr_code: "sdlfjadlkjdfslaj",
          image_path: "ldsajfalkdsjfl"
      })
      api.post("/dealers/insert", {tableName: "dealers", values: form})
      .then((response) => {
        // setData(response.data);
        navigate("/admin/dealers")
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <StyledAdd>
      <h1>Add New Dealer</h1>
      <form>
        <div>
          <TextField
            label="Name"
            name="name"
            onChange={changeHandler}
            required
            margin="normal"
          />
          <TextField
            label="Name in Urdu"
            name="urdu_name"
            onChange={changeHandler}
            required
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="CNIC"
            name="cnic_id"
            onChange={changeHandler}
            required
            margin="normal"
          />
          <TextField
            label="Phone Number"
            name="phone_number"
            onChange={changeHandler}
            required
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Address"
            name="address"
            onChange={changeHandler}
            required
            margin="normal"
          />
          <TextField
            label="City"
            name="city_id"
            value={1}
            // onChange={changeHandler}
            required
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Date of Birth"
            name="date_of_birth"
            // onChange={changeHandler}
            required
            margin="normal"
          />
        </div>

        <Button variant="contained" size="large" type="submit" onClick={submitHandler}>
            Submit
          </Button>
      </form>
    </StyledAdd>
  );
}

const StyledAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin: auto;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        * {
            width: 300px;
        }
    }
  }
`;

export default AddDealer;
