import React from "react";
import { Form, Input, Button, Typography, Layout, Card } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";

const { Content } = Layout;
const ForgotPassword = () => {
  return (
    <Layout style={{ height: 600 }}>
      <Hidden xsDown>
        <Card
          style={{
            backgroundColor: "white",
            width: 500,
            marginTop: 40,
            marginLeft: 450,
            padding: "5px",
            boxShadow: "0 5px 20px #777"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button onClick="" icon={<ArrowLeftOutlined />} />
            <Typography style={{ marginLeft: 20 }}>Forgot Password?</Typography>
          </div>
          <Form style={{ marginTop: 40 }} layout="vertical" name="basic">
            <Form.Item label="Email Address" name="email">
              <Input placeholder="Email address.." type="email" value="" />
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
            A password reset link will be sent to this email address. Please
            proceed and follow the steps..
          </Typography>
          <Form.Item>
            <Link to="/login">
              <Button type="primary">Send Link</Button>
            </Link>
          </Form.Item>
        </Card>
      </Hidden>
    </Layout>
  );
};

export default ForgotPassword;
