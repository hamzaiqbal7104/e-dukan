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

const LoginPage = () => {
  return (
    <Layout>
      <Tabs centered size="small">
        <TabPane key="Login" tab="Login">
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
                  <Card style={{ width: 400, alignItems: "center" }}>
                    <Form
                      style={{
                        marginTop: 60,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                      layout="vertical"
                      name="basic"
                    >
                      <Form.Item label="Email" name="email">
                        <Input
                          placeholder="Email"
                          value="ali@gmail.com"
                          type="email"
                        />
                      </Form.Item>
                      <Form.Item
                        style={{ marginBottom: 4 }}
                        label="Password"
                        name="password"
                      >
                        <Input.Password placeholder="Password" value="123" />
                      </Form.Item>

                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        style={{ marginBottom: 120 }}
                      >
                        <Row
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Col>
                            <Checkbox>Remember me</Checkbox>
                          </Col>
                          <Col>
                            <Link
                              to="/sforgot"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                type="link"
                              >
                                Forgot Password?
                              </Button>
                            </Link>
                            {/* <Typography className="forgotPassword" onClick="">
                              Forgot Password?
                            </Typography> */}
                          </Col>
                        </Row>
                      </Form.Item>
                      <Form.Item style={{ marginBottom: 10 }}>
                        <Link
                          to="/sdashboard"
                          style={{ textDecoration: "none" }}
                        >
                          <Button type="primary">
                            Login
                          </Button>
                        </Link>
                        {/* <Button type="primary" htmlType="submit" onClick="">
                          Login
                        </Button> */}
                      </Form.Item>
                      <Form.Item style={{ textAlign: "center" }}>
                        Don't have an account?{" "}
                        <Link
                          to="/sforgot"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            type="link"
                          >
                            SignUp
                          </Button>
                        </Link>
                        {/* <Button
                          type="link"
                          onClick="signup"
                        >
                          SignUp
                        </Button> */}
                      </Form.Item>
                    </Form>
                  </Card>
                </Card>
              </div>
            </Content>
          </Hidden>
        </TabPane>
        <TabPane key="SignUp" tab="SignUp">
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
                  <Card style={{ width: 400, alignItems: "center" }}>
                    <Form
                      style={{
                        marginTop: 60,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                      layout="vertical"
                      name="basic"
                    >
                      <Row>
                        <Col span={11}>
                          <Form.Item label="First Name" name="firstName">
                            <Input placeholder="First Name" value="Ali" />
                          </Form.Item>
                        </Col>
                        <Col span={12} offset={1}>
                          <Form.Item label="Last Name" name="lastName">
                            <Input placeholder="Last Name" value="Raza" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Form.Item label="Email" name="email">
                        <Input
                          placeholder="Email"
                          type="email"
                          value="ali@gmail.com"
                        />
                      </Form.Item>
                      <Row>
                        <Col span={11}>
                          <Form.Item label="Password" name="password">
                            <Input.Password
                              placeholder="Password"
                              type="password"
                              value="123"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12} offset={1}>
                          <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                          >
                            <Input.Password
                              placeholder="Confirm Password"
                              type="password"
                              value="123"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "30px 0",
                        }}
                      >
                        <label htmlFor="myImage">
                          <img className="profile-image" src={noUser} alt="" />
                        </label>

                        <input
                          style={{ display: "none" }}
                          type="file"
                          id="myImage"
                          name="myImage"
                        />
                      </div>
                      <Form.Item style={{ marginTop: 10, marginBottom: 10 }}>
                        <Link
                          to="/login"
                        >
                          <Button type="primary">
                            Signup
                          </Button>
                        </Link>
                        {/* <Button
                          type="primary"
                          htmlType="submit"
                          block
                          onClick={LoginPage}
                        >
                          Sign Up
                        </Button> */}
                      </Form.Item>
                      <Form.Item style={{ textAlign: "center" }}>
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          style={{ textDecoration: "none" }}
                        >
                          <Button type="primary">
                            Login
                          </Button>
                        </Link>
                        {/* <Button
                          type="link"
                          htmlType="reset"
                          onClick=""
                        >
                          Login
                        </Button> */}
                      </Form.Item>
                    </Form>
                  </Card>
                </Card>
              </div>
            </Content>
          </Hidden>
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default LoginPage;
