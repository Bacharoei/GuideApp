import React from "react";
import axios from "axios";

const Register = async ({ email, password, username }) => {
  const res = await axios
    .post(`http://localhost:3030/users/signup`, {
      username,
      email,
      password,
    })
    .catch((error) => console.log(error));
  return res;
};

export default Register;
