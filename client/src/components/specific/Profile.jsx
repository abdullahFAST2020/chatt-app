import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";

import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"1rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"Pakistani"} />
      <ProfileCard
        heading={"UserName"}
        text={"abdullah1261"}
        Icon={UserNameIcon}
      />
      <ProfileCard
        heading={"Name"}
        text={"Muhammad Abdullah"}
        Icon={FaceIcon}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment('2024-09-19T00:00:01.996Z').fromNow()}
        Icon={CalendarIcon}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"} 
    color={"white"}
    textAlign={"center"}
  >
    {Icon && <Icon />} {/* Ensure Icon is rendered correctly */}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color="gray" variant="caption"> {/* Corrected "olor" to "color" */}
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
