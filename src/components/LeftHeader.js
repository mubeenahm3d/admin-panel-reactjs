import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GradeIcon from "@mui/icons-material/Grade";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SmsIcon from "@mui/icons-material/Sms";

function LeftHeader() {
  const activeHandler = (navData) => (navData.isActive ? "active" : "");
  return (
    <StyledHeader>
      <ul>
        <li className="logo-list">
          <NavLink
            className={(navData) => (navData.isActive ? "active logo" : "logo")}
            to="/admin"
          >
            Minhas
          </NavLink>
        </li>
        <li>
          <NavLink className={activeHandler} to="/admin/dealers">
            <PersonIcon sx={{ fontSize: 30, margin: 1 }} /> Dealers
          </NavLink>
        </li>
        <li>
          <NavLink className={activeHandler} to="/admin/sub-dealers">
            <PersonIcon sx={{ fontSize: 30, margin: 1 }} /> Sub Dealers
          </NavLink>
        </li>
        <li>
          <NavLink className={activeHandler} to="/admin/plumbers">
            <PersonIcon sx={{ fontSize: 30, margin: 1 }} /> Plumbers
          </NavLink>
        </li>
        <li>
          <NavLink className={activeHandler} to="/admin/shops">
            <StoreIcon sx={{ fontSize: 30, margin: 1 }} />
            Shops
          </NavLink>
        </li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Pushster&display=swap");
  width: 258px;
  min-height: 100vh;
  background-color: #233044;
  .logo{
    font-family: "Pushster", cursive;
    text-align: center;
    padding-left: 2rem;
    font-size: 3rem;
  }
  .logo-list{
    height: 60px; 
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      width: 100%;
      height: 45px;
      svg {
        color: var(--textSecondary);
      }
      a {
        display: flex;
        align-items: center;
        height: 100%;
        color: "white";
        :hover {
          background-color: #1e293a;
        }
      }
      .active {
        background-color: #1e293a;
      }
    }
  }
`;
export default LeftHeader;
