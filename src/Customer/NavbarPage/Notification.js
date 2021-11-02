import React from "react";
import {  Typography, Result, Layout} from "antd";
import {  Hidden } from "@material-ui/core";

function Notification() {
  return (
    <Layout>
      <Hidden xsDown>
        <h1 style={{ marginTop: "50px", color: "gray"}}>Notification</h1>
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
      </Hidden>
      <Hidden smUp>
        <h1 style={{ marginTop: "30px", color: "gray"}}>Notification</h1>
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
      </Hidden>
    </Layout>
  );
}

export default Notification;
