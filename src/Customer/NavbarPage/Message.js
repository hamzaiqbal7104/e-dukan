import React from "react";
import {  Typography, Result, Layout} from "antd";
import {  Hidden } from "@material-ui/core";

function Message() {
  return (
    <Layout>
      <Hidden xsDown>
        <h1 style={{ marginTop: "30px", color: "gray"}}>Messages</h1>
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
      </Hidden>
      <Hidden smUp>
        <h1 style={{ marginTop: "30px", color: "gray"}}>Messages</h1>
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
      </Hidden>
    </Layout>
  );
}

export default Message;
