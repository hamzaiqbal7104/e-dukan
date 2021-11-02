import React from "react";
import { Col, Row, Tabs, Badge, Button, Tooltip, Layout, Grid } from "antd";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  BellOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  ContactsOutlined
} from "@ant-design/icons";

const { TabPane } = Tabs;
const NavbarPage = () => {
  return (
    <Layout>
      <Hidden xsDown>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            padding: "10px",
            boxShadow: "0 5px 20px #777",
          }}
        >
          <Col style={{ justifyContent: "start", padding: "10px", borderRadius: "10px", boxShadow: "0 5px 20px #777", }}>
            <Button type="link">E-Dukan</Button>
          </Col>
          <Col>
            <Tabs
              tabBarStyle={{ marginBottom: 0 }}
              style={{ alignItems: "center" }}
              className="appBar"
              size="middle"
            >
              <TabPane
                tab={
                  <Link to="/">
                    <HomeOutlined />
                    Home
                  </Link>
                }
                key="Home"
              ></TabPane>
              <TabPane
                tab={
                  <Link to="/cart">
                    <ShoppingCartOutlined />
                    Cart
                    <Badge
                      count=""
                      style={{ marginLeft: 5, marginTop: -4 }}
                    ></Badge>
                  </Link>
                }
                key="cart"
              ></TabPane>
              <TabPane
                tab={
                  <Link to="/order" >
                    <UnorderedListOutlined />
                    Orders
                    <Badge
                      count=""
                      style={{ marginLeft: 5, marginTop: -4 }}
                    ></Badge>
                  </Link>
                }
                key="Order"
              ></TabPane>
              <TabPane
                tab={
                  <Link to="/about" >
                    <InfoCircleOutlined />
                    AboutUs
                    <Badge
                      count=""
                      style={{ marginLeft: 5, marginTop: -4 }}
                    ></Badge>
                  </Link>
                }
                key="About"
              ></TabPane>
              <TabPane
                tab={
                  <Link to="/contact" >
                    <ContactsOutlined />
                    ContactUs
                    <Badge
                      count=""
                      style={{ marginLeft: 5, marginTop: -4 }}
                    ></Badge>
                  </Link>
                }
                key="Contact"
              ></TabPane>
            </Tabs>
          </Col>
          <Col>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Col>
                <div>
                  <>
                    <Tooltip title="notifications">
                      <Link to="/notification">
                        <Button
                          shape="circle"
                          style={{ marginRight: 14 }}
                          icon={
                            <Badge>
                              <BellOutlined />
                            </Badge>
                          }
                        />
                      </Link>
                    </Tooltip>
                    <Tooltip title="Settings">
                      <Link to="/account/detail">
                      <Button shape="circle" icon={<SettingOutlined />}>
                        {/* Logout */}
                      </Button>
                      </Link>
                    </Tooltip>
                  </>
                  <Link to="/form">
                    <Button
                      style={{ marginLeft: 10 }}
                      type="primary"
                      shape="round"
                    >
                      Login / SignUp
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Hidden>
    </Layout>
  );
};

export default NavbarPage;
