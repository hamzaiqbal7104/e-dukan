import React from "react";
import { Card, Typography, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import assets from "../../assets/noUser.jpg";

const { Title } = Typography;
const AccountDetailsPage = () => {
  return (
    <Card style={{ backgroundColor: "white", width: 500, marginTop: 40, marginLeft: 300 }}>
      <Typography>Account Details</Typography>
      <div
        style={{
          marginTop: 100,
          textAlign: "center",
        }}
      >
        <div>
          <Avatar src={assets} alt="lp" style={{ height: 100, width: 100 }} />
        </div>
        <br />
        <div>
          <Title level={5}>Ali Raza</Title>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button shape="round">ali@gmail.com</Button>
        </div>

        <div
          style={{
            width: 200,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <Link to="/login">
            <Button 
              type="default" danger
            >
              Logout
            </Button>
          </Link>
          <Link to="">
            <Button 
              type="ghost"
            >
              Edit Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AccountDetailsPage;
