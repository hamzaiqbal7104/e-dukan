import React from "react";
import {
  Typography,
  Layout,
  Card,
  Form,
  Input,
  Button,
  Grid,
} from "antd";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

const { Content } = Layout;
const ResetPassword = () => {
  return (
    <Layout>
      <Hidden xsDown>
        <Content
          className="site-layout"
          style={{
            padding: "16px 50px",
            height: "91.2vh",
            overflowY: "scroll",
            borderWidth: 1,
            borderStyle: "inherit",
          }}
        >
          <div style={{ marginTop: 16 }}>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 40,
              }}
            >
              <Typography style={{ marginBottom: 40, textAlign: "center" }}>
                Change your Password..
              </Typography>
              <Card style={{ width: 400, alignItems: "center" }}>
                <Form layout="vertical">
                  <Form.Item label="New Password" name="password">
                    <Input.Password
                      placeholder="New Password"
                      value=""
                    />
                  </Form.Item>
                  <Form.Item label="Confirm Password" name="confirmPassword">
                    <Input.Password
                      placeholder="Confirm Password"
                      value=""
                    />
                  </Form.Item>
                </Form>
                <Grid>
                  <Link to="/">
                    <Button
                      block
                      type="primary"
                    >
                      Reset
                    </Button>
                  </Link>
                </Grid>
              </Card>
            </Card>
          </div>
        </Content>
      </Hidden>
    </Layout>
  );
};

export default ResetPassword;
