import React from "react";
import { Layout, Tabs } from "antd";
import { Hidden } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Category from "../Category/Category";


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
          <Grid style={{boxShadow: "0 5px 20px #777"}}>
            <Category />
          </Grid>
          <br />
          <Tabs size="small">
            <TabPane tab="Home">
              Home
            </TabPane>
          </Tabs>
          <Grid>
            <Banner />
          </Grid>
          <br />
          <Grid>
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
