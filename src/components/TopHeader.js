import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import { Avatar, Badge } from "@mui/material";
import styled from "styled-components";
import { Notifications } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";



function TopHeader() {
  return (
    <StyledHeader>
      <Badge
        badgeContent={4}
        variant="dot"
        overlap="circular"
        color="error"
        sx={{ "& .MuiBadge-badge": { fontSize: 10, height: 10, minWidth: 10 } }}
      >
        <SmsIcon sx={{ fontSize: 30, color: "gray" }} />
      </Badge>
      <Badge
        badgeContent={4}
        variant="dot"
        overlap="circular"
        color="error"
        sx={{ "& .MuiBadge-badge": { fontSize: 10, height: 10, minWidth: 10 } }}
      >
        <Notifications sx={{ fontSize: 30, color: "gray" }} />
      </Badge>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
    </StyledHeader>
  );
}
const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: end;
  padding-right: 2rem;
  background-color: var(--bg);
  box-shadow: 0px 4px 4px var(--shadow);
  * {
    margin-right: 0.8rem;
  }
`;
export default TopHeader;
