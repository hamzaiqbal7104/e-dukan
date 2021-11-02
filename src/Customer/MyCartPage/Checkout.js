import React from "react";
import {
  Layout,
  Tabs,
  Row,
  Col,
  Card,
  Button,
  Steps,
  Form,
  Input,
  Select,
} from "antd";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";

const { Content } = Layout;
const { TabPane } = Tabs;
const Checkout = () => {
  return (
    <Layout>
      <Hidden xsDown>
        <Content
          className="site-layout"
          style={{
            padding: "16px 180px",
            height: "100%",
            borderWidth: 1,
            borderStyle: "inherit",
            boxShadow: "0 5px 20px #777",
          }}
        >
          <Tabs size="small">
            <TabPane tab="My Cart">
              <div
                className="site-layout-background-color"
                style={{ padding: 24 }}
              >
                <Row style={{ justifyContent: "center" }}>
                  <Col style={{ width: 600 }}>
                    <Card style={{ marginBottom: 20, boxShadow: "0 5px 20px #777" }}>
                      <div>
                        <Form layout="vertical">
                          <Form.Item
                            label="Delivery Address"
                            name="Delivery Address"
                          >
                            <Input placeholder="Delivery Address" />
                          </Form.Item>
                          <Row>
                            <Col span={11}>
                              <Form.Item label="Country" name="Country">
                                <Input.Group compact>
                                  <Select style={{ width: "100%" }}></Select>
                                </Input.Group>
                              </Form.Item>
                            </Col>
                            <Col span={11} offset={2}>
                              <Form.Item label="State">
                                <Input.Group compact>
                                  <Select style={{ width: "100%" }}></Select>
                                </Input.Group>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={11}>
                              <Form.Item label="City / Town">
                                <Input.Group compact>
                                  <Select style={{ width: "100%" }}></Select>
                                </Input.Group>
                              </Form.Item>
                            </Col>
                            <Col span={11} offset={2}>
                              <Form.Item
                                name="Pin / Zip Code"
                                label="Pin / Zip Code"
                              >
                                <Input
                                  placeholder="Pincode / Zipcode"
                                  type="text"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Form.Item
                            label="Mobile No"
                            name="Mobile No"
                            style={{ marginBottom: 0 }}
                          >
                            <Input placeholder="Mobile No" type="text" />
                          </Form.Item>
                        </Form>
                      </div>
                      {/* </Card> */}
                      <br />
                      <div className="steps-action" style={{ marginTop: 16 }}>
                        <Row>
                          <Col span={11}>
                            <Link to="/cart">
                              <Button type="default" block style={{boxShadow: "0 5px 20px #777"}}>
                                Back to Cart
                              </Button>
                            </Link>
                          </Col>
                          <Col span={11} offset={2}>
                            <Link to="/review/order">
                              <Button type="primary" block style={{boxShadow: "0 5px 20px #777"}}>
                                Review
                              </Button>
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </TabPane>
          </Tabs>
        </Content>
      </Hidden>
    </Layout>
  );
};

export default Checkout;
