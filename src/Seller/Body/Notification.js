import React from "react";
import {  Typography, Result} from "antd";

function Notification() {
  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Notification</h1>
      <div style={{ marginTop: 60 }}>
        <Result
          status="403"
          title={
            <Typography style={{ fontSize: 18 }}>
              Your have no notifications..
            </Typography>
          }
        />
      </div>
    </div>
  );
}

export default Notification;
