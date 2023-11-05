import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { signIn } from "../api/signIn";

const { Title, Text } = Typography;

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("example@email.com");
  const [password, setPassword] = useState("P@ssw0rd");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    if (!validateEmail(email)) {
      return;
    }
    try {
      console.log(email, password);
      const response = await signIn(email, password);
      // Handle successful sign-in
      console.log("Sign-in successful:", response);
      navigate("/booking");
    } catch (error) {
      // Handle authentication error or network error
      console.error("Error occurred:", error);
    }
  };

  const validateEmail = (email) => {
    // A simple email validation check (you might want to use a more comprehensive email validation method)
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "50px" }}>
      <Title level={2}>Sign in</Title>
      <Text style={{ color: "gray", fontWeight: "bold" }}>
        Hi there! Nice to see you again.
      </Text>
      <div style={{ marginBottom: "16px" }}>
        <Text type="danger" style={{ fontWeight: "bold" }}>
          Email
        </Text>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Text type="danger" style={{ fontWeight: "bold" }}>
          Password
        </Text>
        <Input.Password
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Button
          type="primary"
          danger
          style={{ width: "100%" }}
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Text style={{ color: "gray", fontWeight: "bold" }}>
          Haven't an Account? {" "}
        </Text>
        <Link to="/signup" style={{ color: "red", textDecoration: "none" }}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
