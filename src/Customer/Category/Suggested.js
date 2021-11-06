import React from "react";
import { Layout, Tabs, Breadcrumb } from "antd";
import { Hidden } from "@material-ui/core";
import Products from "../Products/Products";
import Category from "./Category";

const { Content } = Layout;
const { TabPane } = Tabs;
function Suggested() {
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
            <TabPane tab="Suggested">
              <Breadcrumb style={{ marginBottom: 16 }}>
                <Breadcrumb.Item className="breadCrum" onClick="">
                  Suggested
                </Breadcrumb.Item>
                <Breadcrumb.Item className="breadCrum"></Breadcrumb.Item>
              </Breadcrumb>
              <Products />
            </TabPane>
          </Tabs>
        </Content>
      </Hidden>
    </Layout>
  );
}

export default Suggested;
