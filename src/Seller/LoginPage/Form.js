import React from "react";
import {
  Tabs,
  Form,
  Input,
  Button,
  Grid,
  Checkbox,
  Typography,
  Row,
  Col,
  Layout,
  Card,
} from "antd";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import noUser from "../../pics/noUser.jpg";

const { TabPane } = Tabs;
const { Content } = Layout;

const Form1 = () => {
  return (
    <Layout>
      <Tabs centered size="small">
        <TabPane key="Login" tab="Login">
        </TabPane>
        <TabPane key="SignUp" tab="SignUp">
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default Form1;
