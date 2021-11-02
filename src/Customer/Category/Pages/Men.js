import React from "react";
import { Layout, Tabs, Breadcrumb } from "antd";
import { Hidden } from "@material-ui/core";
import Products from "../../Products/Products";
import Category from "../Category";

const { Content } = Layout;
const { TabPane } = Tabs;
function Men() {
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
          <div style={{ boxShadow: "0 5px 20px #777" }}>
            <Category />
          </div>
          <Tabs size="small">
            <TabPane tab="Category">
              <Breadcrumb style={{ marginBottom: 16 }}>
                <Breadcrumb.Item className="breadCrum" onClick="">
                  Men
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

export default Men;
