import React from "react";
import { Button, Grid } from "@material-ui/core";
import {
  Layout,
  Tabs,
  Row,
  Col,
  Card,
} from "antd";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import pic from "../../pics/l1.jpg";
import { BsPlusCircleFill } from "react-icons/bs";
import { GrSubtractCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  outer: {
    backgroundColor: "white",
    boxShadow: "0 5px 20px #777",
    marginBottom: "0.5em",
    [theme.breakpoints.down("md")]: {},
  },
  photo: {
    width: "100px",
    height: "100px",
    borderBottom: "1px solid grey",
  },
  actionbtn: {
    marginRight: "1em",
    marginLeft: "1em",
  },
  innerItem: {
    margin: "2em",

    borderRight: "1px solid grey",
  },
  h2: {
    backgroundColor: "#141A46",
    borderRadius: "10px",
    padding: "10px",
    color: "white",
    boxShadow: "0 5px 20px #777",
  },
  smallouter: {
    backgroundColor: "white",
    padding: "10px",
  },
  outer2: {
    paddingTop: "5px",
    marginTop: "5px",
    backgroundColor: "white",
    boxShadow: "0 5px 20px #777",
  },
  checkbtn: {
    [theme.breakpoints.down("md")]: {
      padding: "2px",
      fontSize: "1em",
    },
  },
  fullouter2: {
    backgroundColor: "white",
    boxShadow: "0 5px 20px #777",
    marginTop: "10px",
    padding: "10px",
  },
}));

const { Content } = Layout;
const { TabPane } = Tabs;
const price = 2350;
function MyCartPage() {
  const classes = useStyles();
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
            <TabPane tab="My Cart">
              <Card className="site-layout-background" style={{ padding: 24 }}>
                <Grid
                  container
                  className={classes.outer}
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Grid item>
                    <img src={pic} alt="title" className={classes.photo} />
                  </Grid>
                  <Grid item>
                    <Grid container justifyContent="space-between" spacing={10}>
                      <Grid item className={classes.innerItem}>
                        <Button
                          variant="contained"
                          className={classes.actionbtn}
                        >
                          <BsPlusCircleFill />
                        </Button>
                        1
                        <Button
                          variant="contained"
                          className={classes.actionbtn}
                        >
                          <GrSubtractCircle />
                        </Button>
                      </Grid>
                      <Grid item className={classes.innerItem}>
                        $ {price}
                      </Grid>
                      <Grid item className={classes.innerItem}>
                        <Button variant="contained">
                          <MdDelete fontSize="large" color="red" />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  container
                  className={classes.outer}
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Grid item>
                    <img src={pic} alt="title" className={classes.photo} />
                  </Grid>
                  <Grid item>
                    <Grid container justifyContent="space-between" spacing={10}>
                      <Grid item className={classes.innerItem}>
                        <Button
                          variant="contained"
                          className={classes.actionbtn}
                        >
                          <BsPlusCircleFill />
                        </Button>
                        1
                        <Button
                          variant="contained"
                          className={classes.actionbtn}
                        >
                          <GrSubtractCircle />
                        </Button>
                      </Grid>
                      <Grid item className={classes.innerItem}>
                        $ {price}
                      </Grid>
                      <Grid item className={classes.innerItem}>
                        <Button variant="contained">
                          <MdDelete fontSize="large" color="red" />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  container
                  justifyContent="space-around"
                  className={classes.fullouter2}
                  spacing={2}
                >
                  <Grid item>
                    <b>Total</b>
                  </Grid>
                  <Grid item>${price * 2}</Grid>
                  <Link to="/check">
                  <Button variant="contained" color="primary" style={{boxShadow: "0 5px 20px #777"}}>
                    <Grid item>CheckOut</Grid>
                  </Button>
                  </Link>
                </Grid>
              </Card>
            </TabPane>
          </Tabs>
        </Content>
      </Hidden>
    </Layout>
  );
}

export default MyCartPage;

////////////////////////////

// import React from "react";
// import {
//   Layout,
//   Tabs,
//   Row,
//   Col,
//   Card,
//   Typography,
//   Button,
//   Divider,
// } from "antd";
// import { Hidden } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import { PlusOutlined, TagOutlined, MinusOutlined } from "@ant-design/icons";

// const { Content } = Layout;
// const { TabPane } = Tabs;
// const { Meta } = Card;
// const { Title } = Typography;

// const MyCartPage = () => {
//   return (
//     <Layout>
//       <Hidden xsDown>
//         <Content
//           className="site-layout"
//           style={{
//             padding: "16px 180px",
//             height: "150vh",
//             borderWidth: 1,
//             borderStyle: "inherit",
//           }}
//         >
//           <Tabs size="small">
//             <TabPane tab="My Cart">
//               <div className="site-layout-background" style={{ padding: 24 }}>
//                 <Row style={{ justifyContent: "center" }}>
//                   <>
//                     <Col>
//                       <div>
//                         <Card>
//                           <Row
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-evenly",
//                             }}
//                           >
//                             <Col>
//                               <Card
//                                 style={{ height: 240, width: 180 }}
//                                 cover={
//                                   <img
//                                     alt="example"
//                                     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//                                   />
//                                 }
//                               ></Card>
//                             </Col>

//                             <Col>
//                               <Card style={{ width: 420 }}>
//                                 <Meta
//                                   title={
//                                     <Row
//                                       style={{
//                                         alignContent: "center",
//                                       }}
//                                     >
//                                       <Col span={14}>
//                                         Laptop
//                                       </Col>

//                                       <Col
//                                         span={10}
//                                         style={{ textAlign: "end" }}
//                                       >
//                                         <Row>
//                                           <Col
//                                             span={10}
//                                             style={{
//                                               alignItems: "flex-end",
//                                             }}
//                                           >
//                                             <TagOutlined />
//                                           </Col>
//                                           <Col span={14}>
//                                             <Title level={5}>
//                                               Rs. 100
//                                             </Title>
//                                           </Col>
//                                         </Row>
//                                       </Col>
//                                     </Row>
//                                   }
//                                 />
//                                 <br />
//                                 <Row
//                                   style={{
//                                     alignItems: "center",
//                                   }}
//                                 >
//                                   <Col span={8}>
//                                     <Typography level={5} type="secondary">
//                                       Quantity
//                                     </Typography>
//                                   </Col>
//                                   <Col span={8}>
//                                     <Row>
//                                       <Col span={8}>
//                                         <Button
//                                           icon={
//                                             <MinusOutlined key="decrease" />
//                                           }
//                                           size="middle"
//                                         />
//                                       </Col>
//                                       <Col
//                                         span={8}
//                                         style={{
//                                           textAlign: "center",
//                                           marginTop: 5,
//                                         }}
//                                       >
//                                         <Typography>
//                                           1
//                                         </Typography>
//                                       </Col>
//                                       <Col
//                                         span={8}
//                                         style={{ textAlign: "end" }}
//                                       >
//                                         <Button
//                                           icon={<PlusOutlined key="increase" />}
//                                         ></Button>
//                                       </Col>
//                                     </Row>
//                                   </Col>
//                                   <Col span={8}>
//                                     <Title
//                                       level={5}
//                                       style={{ textAlign: "right" }}
//                                     >
//                                       Rs. 100
//                                     </Title>
//                                   </Col>
//                                 </Row>
//                               </Card>
//                               <br/>
//                               <Row
//                                 style={{
//                                   justifyContent: "flex-end",
//                                 }}
//                               >
//                                 <Link to="/">
//                                   <Button
//                                     danger
//                                     type="primary"

//                                   >
//                                     Remove from Cart
//                                   </Button>
//                                 </Link>
//                               </Row>
//                             </Col>
//                           </Row>
//                         </Card>
//                       </div>
//                     </Col>
//                     <Col span={12} style={{ marginTop: 20 }}>
//                       <Card>
//                         <Row>
//                           <Col span={24}>
//                             <Card>
//                               <Meta title="Breakdowns"></Meta>
//                               <Divider />
//                               <Row
//                                 style={{
//                                   display: "flex",
//                                   justifyContent: "space-between",
//                                 }}
//                               >
//                                 <Col>
//                                   <Typography>Sub-Total</Typography>
//                                 </Col>
//                                 <Col>
//                                   <Title level={5}>
//                                     100
//                                   </Title>
//                                 </Col>
//                               </Row>
//                               <Row
//                                 style={{
//                                   display: "flex",
//                                   justifyContent: "space-between",
//                                   marginTop: 10,
//                                 }}
//                               >
//                                 <Col>
//                                   <Typography>GST (%)</Typography>
//                                 </Col>
//                                 <Col>
//                                   <Typography>Rs. 0</Typography>
//                                 </Col>
//                               </Row>
//                               <Row
//                                 style={{
//                                   display: "flex",
//                                   justifyContent: "space-between",
//                                   marginTop: 20,
//                                 }}
//                               >
//                                 <Col>
//                                   <Typography>Service Charges</Typography>
//                                 </Col>
//                                 <Col>
//                                   <Typography>Rs. 0</Typography>
//                                 </Col>
//                               </Row>
//                               <Row
//                                 style={{
//                                   display: "flex",
//                                   justifyContent: "space-between",
//                                   marginTop: 20,
//                                 }}
//                               >
//                                 <Col>
//                                   <Typography>Delivery Charges</Typography>
//                                 </Col>
//                                 <Col>
//                                   <Typography>Rs. 10</Typography>
//                                 </Col>
//                               </Row>
//                               <Divider />
//                               <Row
//                                 style={{
//                                   display: "flex",
//                                   justifyContent: "space-between",
//                                   marginTop: 20,
//                                 }}
//                               >
//                                 <Col>
//                                   <Title level={5}>Grand Total</Title>
//                                 </Col>
//                                 <Col>
//                                   <Title level={4}>
//                                     Rs. 110
//                                   </Title>
//                                 </Col>
//                               </Row>
//                             </Card>
//                             <div
//                               className="steps-action"
//                               style={{ marginTop: 16 }}
//                             >
//                               <Link to="/check">
//                                 <Button
//                                   type="primary"
//                                   block
//                                 >
//                                   Checkout
//                                 </Button>
//                               </Link>
//                             </div>
//                           </Col>
//                         </Row>
//                       </Card>
//                     </Col>
//                   </>
//                 </Row>
//               </div>
//             </TabPane>
//           </Tabs>
//         </Content>
//       </Hidden>
//     </Layout>
//   );
// };

// export default MyCartPage;
