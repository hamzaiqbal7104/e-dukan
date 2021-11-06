import React from "react";
import { Layout, Tabs, Button, Col, Row } from "antd";
import { Radio } from "antd";
import { Hidden } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Category from "../Category/Category";
// import DailyDeals from "../Category/DailyDeals";
// import Suggested from "../Category/Suggested ";

const { Content } = Layout;
const { TabPane } = Tabs;
const BasePage = () => {
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
          <Grid style={{ boxShadow: "0 5px 20px #777" }}>
            <Category />
          </Grid>
          <br />
          <Grid>
            <Banner />
          </Grid>
          <br />
          <Grid>
            <Products />
          </Grid>
          <br />
          <Grid>
            <Row style={{ boxShadow: "0 5px 20px #777" }}>
              <Col span={11}>
                <h1>DailyDeals</h1>
              </Col>
              <Col span={11} offset={2}>
                <Link to="/deals">
                  <Button type="primary" block>
                    View More
                  </Button>
                </Link>
              </Col>
            </Row>
            <Products />
          </Grid>
          <br />
          <Grid>
            <Row style={{ boxShadow: "0 5px 20px #777" }}>
              <Col span={11}>
                <h1>Suggested Products</h1>
              </Col>
              <Col span={11} offset={2}>
                <Link to="/suggested">
                  <Button type="primary" block>
                    View More
                  </Button>
                </Link>
              </Col>
            </Row>
            <Products />
          </Grid>
          <br />
        </Content>
      </Hidden>
      <Content style={{ textAlign: "center" }}>
        <Footer />
      </Content>
    </Layout>
  );
};

export default BasePage;
