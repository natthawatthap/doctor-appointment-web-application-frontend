import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { signUp } from "../api/signUp";

const { Title, Text } = Typography;

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("P@ssw0rd");
  const [confirmPassword, setConfirmPassword] = useState("P@ssw0rd");
  const [agreed, setAgreed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSignUp = async () => {
    if (
      !validateEmail(email) ||
      password === "" ||
      password !== confirmPassword ||
      !agreed
    ) {
      // Handle validation errors or agreement not checked
      return;
    }
    const response = await signUp(email, password);
    console.log("Sign-up successful:", response);
    navigate("/");
    // Call API for sign-up or further action
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Disable button conditionally based on form validation
  const isButtonDisabled =
    !validateEmail(email) ||
    password === "" ||
    password !== confirmPassword ||
    !agreed;

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "50px" }}>
      <Title level={2}>Sign Up</Title>
      <div style={{ marginBottom: "16px" }}>
        <Text type="danger">Email</Text>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Text type="danger">Password</Text>
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
        <Text type="danger">Confirm Password</Text>
        <Input.Password
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Checkbox checked={agreed} onChange={handleCheckboxChange}>
          I agree to the <Text type="danger">Terms of Services</Text> and{" "}
          <Text type="danger">Privacy Policy</Text>
        </Checkbox>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Button
          type="primary"
          danger
          style={{ width: "100%" }}
          onClick={handleSignUp}
          disabled={isButtonDisabled} // Disable button based on validation
        >
          Continue
        </Button>
      </div>
      <div>
        <span>Have an Account? </span>
        <Link to="/" style={{ color: "red" }}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
