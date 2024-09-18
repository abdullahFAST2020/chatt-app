import React from "react";
import { Menu } from "@mui/material";

const FileMenu = ({ anchorEl, open, onClose }) => {
  return (
    <Menu anchorEl={anchorEl} open={false} onClose={onClose}>
      <div style={{ width: "10rem" }}>File Options</div>
    </Menu>
  );
};

export default FileMenu;
