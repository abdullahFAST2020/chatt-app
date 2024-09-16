import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../../constants/sampleData";


const NewGroup = () => {
  return <Dialog open>
  <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
    <DialogTitle>New Group</DialogTitle>
    {sampleNotifications.length > 0 ? (
      sampleNotifications.map(({ sender, _id }) => (
        <NotificationItems
          sender={sender}
          _id={_id}
          handler={friendRequestHandler}
          key={_id}
        />
      ))
    ) : (
      <Typography textAlign={"center"}>0 Notifications</Typography>
    )}
  </Stack>
</Dialog>
}

export default NewGroup
