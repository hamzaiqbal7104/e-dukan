import React from "react";
import {
  Layout,
  Card,
  Typography,
  Row,
  Col,
  Button,
  Tabs,
  Breadcrumb,
} from "antd";
import { Hidden } from "@material-ui/core";
import { TagOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { TabPane } = Tabs;
const { Meta } = Card;
const { Title } = Typography;

const OrdersPage = () => {
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
          }}
        >
          <Tabs size="small">
            <TabPane tab="My Orders">
              <Breadcrumb style={{ marginBottom: 16 }}>
                <Breadcrumb.Item className="breadCrum" onClick="">
                  All Orders
                </Breadcrumb.Item>
                <Breadcrumb.Item className="breadCrum"></Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background-color"
                style={{
                  padding: "16px 140px",
                  paddingTop: 6,
                  borderWidth: 1,
                  borderStyle: "inherit",
                }}
              >
                <Card
                  style={{
                    boxShadow: "0 5px 20px #777",
                    backgroundColor: "rgb(240, 240, 240)",
                  }}
                >
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography className="orderId">
                      <span style={{ fontWeight: "normal" }}>Order ID:</span>{" "}
                      <span>1</span>
                    </Typography>
                    <div>
                      <Typography className="orderPlacedOn">
                        Placed on
                      </Typography>
                    </div>
                  </Row>
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 20,
                    }}
                  >
                    <Col span={24}>
                      <Card>
                        <Row
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                          }}
                        >
                          <Col>
                            <Card
                              style={{
                                height: 120,
                                width: 90,
                              }}
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                            ></Card>
                          </Col>
                          <Col style={{ width: 300 }}>
                            <Meta
                              style={{ paddingLeft: 20 }}
                              title={
                                <Row
                                  style={{
                                    alignContent: "center",
                                  }}
                                >
                                  <Col>Laptop</Col>
                                </Row>
                              }
                            />
                            <Row
                              style={{
                                marginTop: 30,
                                paddingLeft: 20,
                              }}
                            >
                              <Col span={10}>
                                <Typography>
                                  Qty:{" "}
                                  <span
                                    style={{
                                      fontWeight: 600,
                                    }}
                                  >
                                    1
                                  </span>
                                </Typography>
                              </Col>
                              <Col span={10} style={{ textAlign: "end" }}>
                                <Row>
                                  <Col
                                    span={10}
                                    style={{
                                      alignItems: "flex-end",
                                    }}
                                  >
                                    <TagOutlined />
                                  </Col>
                                  <Col span={14}>
                                    <Title level={5}>Rs. 110</Title>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                  <Card>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Col
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button type="default" onClick="">
                          View Details
                        </Button>
                      </Col>
                      <Col
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Row
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Col style={{ fontWeight: 600 }}>
                            <Typography>Total:</Typography>
                          </Col>
                          <Col
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: 18,
                              fontWeight: 600,
                              marginLeft: 10,
                            }}
                          >
                            Rs.{" "}
                            <Typography style={{ marginLeft: 5 }}>
                              110
                            </Typography>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                  <Card>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Col
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          style={{
                            color: "rgb(180, 180, 180)",
                            marginRight: 10,
                          }}
                        >
                          Status:
                        </Typography>
                        <Typography
                          style={{
                            color: " rgb(0, 187, 0)",
                            fontSize: 14,
                            fontWeight: 600,
                          }}
                        >
                          In-transit
                        </Typography>
                        <Typography
                          style={{
                            color: "red",
                            fontSize: 14,
                            fontWeight: 600,
                          }}
                        >
                          Pending
                        </Typography>
                      </Col>
                      <Col
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          style={{
                            color: "rgb(180, 180, 180)",
                            marginRight: 10,
                          }}
                        >
                          Expected Delivery Date: 10-11-2021
                        </Typography>
                      </Col>
                    </Row>
                  </Card>
                </Card>
              </div>
            </TabPane>
          </Tabs>
        </Content>
      </Hidden>
    </Layout>
  );
};

export default OrdersPage;
