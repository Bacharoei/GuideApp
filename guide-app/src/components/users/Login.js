import React from "react";
import axios from "axios";

const Login = async ({ email, password }) => {
  const res = await axios
    .post(`http://localhost:3030/users/login`, {
      email,
      password,
    })
    .catch((error) => console.log(error));
  return res;
};

export default Login;
