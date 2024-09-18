import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { lightblue } from "../../constants/color";
import { fileformat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={lightblue} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileformat(url);

          return (
            <Box key={index}>
              <a 
                href= {url} // Set href to the URL of the attachment
                target="_blank"
                download
                style={{ color: "black" }}
              >
                {RenderAttachment(file, url)}{" "}
                {/* RenderAttachment should be used as a component */}
              </a>
            </Box>
          );
        })}
      <Typography variant="caption" color="text.secondary">
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
