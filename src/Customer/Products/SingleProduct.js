import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Layout,
  Tabs,
  Breadcrumb,
} from "antd";
import { Hidden } from "@material-ui/core";
import { TagOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { TabPane } = Tabs;
const { Title } = Typography;
const SingleProduct = () => {
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
            <TabPane tab="Product">
              <Breadcrumb style={{ marginBottom: 16 }}>
                <Breadcrumb.Item className="breadCrum" onClick="">
                  Product
                </Breadcrumb.Item>
                <Breadcrumb.Item className="breadCrum"></Breadcrumb.Item>
              </Breadcrumb>
              <Card
                style={{
                  boxShadow: "0 5px 20px #777",
                  marginLeft: 210,
                  width: 620,
                  justifyContent: "space-evenly",
                }}
              >
                <Card>
                  <Col>
                    <img
                      style={{
                        height: 210,
                        width: 510,
                        boxShadow: "0 5px 20px #777",
                      }}
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <br />
                    <br />
                    <br />
                    <Row>
                      <Col>
                        <span style={{ marginLeft: 10 }}>
                          <b>Name</b>
                        </span>
                      </Col>
                      <Col span={22} style={{ textAlign: "right" }}>
                        <Title level={5}>Laptop</Title>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <TagOutlined />
                        <span style={{ marginLeft: 10 }}>
                          <b>Price</b>
                        </span>
                      </Col>
                      <Col span={22} style={{ textAlign: "right" }}>
                        <Title level={5}>Rs. 100</Title>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <TagOutlined />
                        <span style={{ marginLeft: 10 }}>
                          <b>Description</b>
                        </span>
                      </Col>
                      <Col span={22} style={{ textAlign: "right" }}>
                        <Title level={5}>This is Good Product</Title>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <Link to="/cart">
                          <Button
                            style={{ width: 150, boxShadow: "0 5px 20px #777" }}
                            type="primary"
                          >
                            Add To Cart
                          </Button>
                        </Link>
                      </Col>
                      <Col span={16} style={{ textAlign: "right" }}>
                        <Link to="/">
                          <Button
                            type="primary"
                            style={{
                              width: 180,
                              boxShadow: "0 5px 20px #777",
                              backgroundColor: "green",
                              color: "white",
                              cursor: "pointer",
                            }}
                          >
                            Video Call
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Card>
              </Card>
            </TabPane>
          </Tabs>
        </Content>
      </Hidden>
    </Layout>
  );
};

export default SingleProduct;
