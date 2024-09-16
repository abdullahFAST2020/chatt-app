import React, { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor } from "../constants/color";
import { InputBox } from "../components/styles/StyledComponents";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { blue } from "../constants/color";
import {FileMenu} from "../dialogs/FileMenu";

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {}
      </Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton sx={{
            position:"absolute",
            left: "1.5rem",


          }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Message Here..."/>
          <IconButton type="submit" sx={{
            backgroundColor: blue,
            color:"white",
            marginLeft:"1rem",
            padding:"0.5rem",
            "&:hover":{
              backgroundColor:"#1565C0",
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu/>
    </Fragment>
  );
};

export default AppLayout()(Chat);
