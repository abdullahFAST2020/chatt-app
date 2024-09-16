import React from "react";
import { Menu } from "@mui/material";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1}>
      <div style={{ width: "10rem" }}></div>
    </Menu>
  );
};

export default FileMenu;
