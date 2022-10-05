import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <StyledDetail>
    <h1>Detail </h1>
      <div>
        <h3>
          Name: <span>name</span>
        </h3>
        <h3>
          Cnic: <span>name</span>
        </h3>
        <h3>
          Phone#: <span>name</span>
        </h3>
        <h3>
          Address: <span>name</span>
        </h3>
        <h3>
          City: <span>name</span>
        </h3>
        <h3>
          Urdu Name: <span>name</span>
        </h3>
      </div>
      <div>
          <h1>Graph</h1>
      </div>
    </StyledDetail>
  );
}

const StyledDetail = styled.div`
  margin: 2rem;
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 20px rgb(0 0 0 / 40%);
    width: 500px;
    min-height: 30rem;
    transition: all 0.3s ease;
    border-radius: 8px;
    margin: 4rem;
    :hover {
      transform: scale(1.02);
    }
    * {
        margin: .2rem;
    }
  }
`;
export default Detail;
