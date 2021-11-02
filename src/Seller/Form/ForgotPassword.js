import React from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Layout,
  Card,
  Grid,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";

const { Content } = Layout;
const ForgotPassword = () => {
  return (
    <Layout>
      <Hidden xsDown>
        <Content
          className="site-layout"
          style={{
            padding: "16px 50px",
            height: "91.2vh",
            borderWidth: 1,
            borderStyle: "inherit",
          }}
        >
          <div style={{ marginTop: 20 }}>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 40,
              }}
            >
              <Card style={{ width: 400, alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button onClick="" icon={<ArrowLeftOutlined />} />
                  <Typography style={{ marginLeft: 20 }}>
                    Forgot Password?
                  </Typography>
                </div>
                <Form style={{ marginTop: 40 }} layout="vertical" name="basic">
                  <Form.Item label="Email Address" name="email">
                    <Input
                      placeholder="Email address.."
                      type="email"
                      value=""
                    />
                  </Form.Item>
                </Form>
                <Typography
                  style={{
                    textAlign: "center",
                    fontStyle: "italic",
                    fontSize: 13.5,
                    marginBottom: 100,
                  }}
                >
                  A password reset link will be sent to this email address.
                  Please proceed and follow the steps..
                </Typography>
                <Form.Item>
                  <Grid>
                    <Link to="/">
                      <Button
                        type="primary"
                      >
                        Send Link
                      </Button>
                    </Link>
                  </Grid>
                </Form.Item>
              </Card>
            </Card>
          </div>
        </Content>
      </Hidden>
    </Layout>
  );
};

export default ForgotPassword;
