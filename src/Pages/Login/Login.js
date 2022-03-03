import React from "react";
import "./styles/styles.css";
import Logo from "../../assets/images/logo.png";
import { loginUrl } from "../../Components/spotify";
function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="aa" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
