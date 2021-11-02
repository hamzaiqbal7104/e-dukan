import React from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Input,
  Form,
  Divider,
  InputNumber,
  Select,
  Layout,
} from "antd";
import { TagOutlined, SaveOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Hidden } from "@material-ui/core";
import noImage from "../../assets/no-image.jpg";

const { Option } = Select;
const AddProduct = () => {
  return (
    <Layout>
      <Hidden xsDown>
        <div className="site-layout-background">
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            <label htmlFor="myImage" className="fileInput">
              <img
                className="product-image"
                src={noImage}
                alt=""
                style={{ height: 420, width: 310 }}
              />
            </label>
            <input
              style={{ display: "none" }}
              type="file"
              id="myImage"
              name="myImage"
            />
            <Col lg={8}>
              <div>
                <Form layout="vertical">
                  <Form.Item label="Title">
                    <Input
                      defaultValue=""
                      placeholder="Product Title"
                    />
                  </Form.Item>
                </Form>
                <Form layout="vertical">
                  <Form.Item label="Description">
                    <Input
                      defaultValue=""
                      placeholder="Product Description"
                      style={{
                        fontWeight: "inherit",
                        fontSize: 14,
                      }}
                    />
                  </Form.Item>
                </Form>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col span={16}>
                    <TagOutlined />
                    <span style={{ marginLeft: 10 }}>Price</span>
                  </Col>
                  <Col span={8}>
                    <Input.Group
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Rs.  </Typography>
                      <InputNumber
                        defaultValue=""
                        placeholder="Amount"
                        style={{
                          fontWeight: "inherit",
                          fontSize: 14,
                        }}
                      />
                    </Input.Group>
                  </Col>
                </Row>
                <Divider />
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col span={14}>
                    <AppstoreOutlined />
                    <span style={{ marginLeft: 10 }}>Category</span>
                  </Col>
                  <Col span={10}>
                    <Input.Group>
                      <Select
                        defaultValue=""
                        style={{ width: "100%" }}
                      >
                          <Option>
                            Category
                          </Option>
                      </Select>
                    </Input.Group>
                  </Col>
                </Row>
                <br />
                <Row
                  style={{
                    marginTop: 8,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Col span={14}>
                    <AppstoreOutlined />
                    <span style={{ marginLeft: 10 }}>Sub-Category</span>
                  </Col>
                  <Col span={10}>
                    <Input.Group compact>
                      <Select
                        defaultValue=""
                        style={{ width: "100%" }}
                      >
                        <Option>
                          SubCategory
                        </Option>
                      </Select>
                    </Input.Group>
                  </Col>
                </Row>
                <Divider />
                  <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    onClick=""
                    block
                  >
                    Add Product
                  </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Hidden>
    </Layout>
  );
};

export default AddProduct;
