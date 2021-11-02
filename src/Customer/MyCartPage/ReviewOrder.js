import React from "react";
import {
  Layout,
  Tabs,
  Row,
  Col,
  Card,
  Typography,
  Button,
  Divider,
} from "antd";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TagOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { TabPane } = Tabs;
const { Meta } = Card;
const { Title } = Typography;

const ReviewOrder = () => {
  return (
    <>
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
              <TabPane tab="My Cart">
                <div className="site-layout-background-color" style={{ padding: 24 }}>
                  <Row style={{ justifyContent: "center" }}>
                    <Card style={{ width: 650, boxShadow: "0 5px 20px #777" }}>
                      <Row style={{ justifyContent: "center" }}>
                        <Card>
                          <Row style={{ height: 180, width: 500 }}>
                            <Col>
                              <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                              />
                            </Col>
                            <Col>
                              <Row
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: 10,
                                }}
                              >
                                <Col style={{marginLeft: 40}}>
                                  <Title style={{ textAlign: "right" }}>
                                    Laptop
                                  </Title>
                                </Col>
                              </Row>
                              <Row
                                span={3}
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: 20,
                                }}
                              >
                                <Col style={{marginLeft: 40}}>
                                  <Title level={5}>Qty: 1</Title>
                                </Col>
                                <Col>
                                  <TagOutlined />
                                </Col>
                                <Col style={{marginLeft: 40}}>
                                  <Title level={5}>Rs. 100</Title>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                        <Card
                          style={{
                            width: 550,
                            marginTop: 30,
                          }}
                        >
                          <Meta title="Breakdowns"></Meta>
                          <Divider />
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Col>
                              <Typography>Sub-Total</Typography>
                            </Col>
                            <Col>
                              <Title level={5}>100</Title>
                            </Col>
                          </Row>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: 10,
                            }}
                          >
                            <Col>
                              <Typography>GST (%)</Typography>
                            </Col>
                            <Col>
                              <Typography>Rs. 0</Typography>
                            </Col>
                          </Row>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: 20,
                            }}
                          >
                            <Col>
                              <Typography>Service Charges</Typography>
                            </Col>
                            <Col>
                              <Typography>Rs. 0</Typography>
                            </Col>
                          </Row>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: 20,
                            }}
                          >
                            <Col>
                              <Typography>Delivery Charges</Typography>
                            </Col>
                            <Col>
                              <Typography>Rs. 10</Typography>
                            </Col>
                          </Row>
                          <Divider />
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: 20,
                            }}
                          >
                            <Col>
                              <Title level={5}>Grand Total</Title>
                            </Col>
                            <Col>
                              <Title level={4}>Rs. 110</Title>
                            </Col>
                          </Row>
                        </Card>

                        <Card
                          style={{
                            marginTop: 30,
                            width: 550,
                          }}
                        >
                          <Typography
                            style={{
                              fontStyle: "italic",
                              marginBottom: 10,
                            }}
                          >
                            Delivery Address:
                          </Typography>
                          <div style={{ textAlign: "right" }}>
                            <Typography
                              style={{
                                margin: "8px 0",
                                fontWeight: 600,
                              }}
                            >
                              Lahore, Pakistan
                            </Typography>
                            <Typography style={{ margin: "8px 0" }}>
                              Lahore
                            </Typography>
                            <Typography style={{ margin: "8px 0" }}>
                              Pin: 781028
                            </Typography>
                            <Typography
                              style={{
                                margin: "8px 0",
                                fontStyle: "italic",
                              }}
                            >
                              <span style={{ fontWeight: "bold" }}>
                                Contact No:
                              </span>
                              03216375982
                            </Typography>
                          </div>
                        </Card>
                      </Row>
                      <Row style={{ width: 550, marginLeft: 100, marginTop: 20 }}>
                        <Col span={10}>
                          <Link to="/check">
                            <Button type="default" danger block style={{boxShadow: "0 5px 20px #777"}}>
                              Cancle
                            </Button>
                          </Link>
                        </Col>
                        <Col span={10} offset={1}>
                          <Link to="/">
                            <Button block type="primary" style={{boxShadow: "0 5px 20px #777"}}>
                              Make Payment
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Card>
                  </Row>
                  
                </div>
              </TabPane>
            </Tabs>
          </Content>
        </Hidden>
      </Layout>
    </>
  );
};

export default ReviewOrder;
