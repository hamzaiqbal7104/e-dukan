import React from "react";
import {  Typography, Result} from "antd";

function Message() {
  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Messages</h1>
      <div style={{ marginTop: 60 }}>
        <Result
          status="403"
          title={
            <Typography style={{ fontSize: 18 }}>
              Your have no New Message..
            </Typography>
          }
        />
      </div>
    </div>
  );
}

export default Message;
