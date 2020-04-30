import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Title from "../components/Title";
import registerUser from "../components/users/Register";
import loginUser from "../components/users/Login";
import { UserContext } from "../components/context/users";
import { toast } from "react-toastify";
import AlertLog from "../components/alertLogin";
const Login = () => {
  const { userLogin } = useContext(UserContext);

  const history = useHistory();

  //state values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };

  // const handleChange = (e) => {
  //   setEmail(e.target.value);
  //   setPassword(e.target.value);
  // };

  const handleSubmit = async (e) => {
    let res;
    e.preventDefault();
    if (isMember) {
      res = await loginUser({ email, password });
    } else {
      res = await registerUser({ username, password, email });
      alert("User created successfuly");
    }
    if (res) {
      console.log(res);
      const { token, email } = res.data;
      const newUser = { token, email };
      userLogin(newUser);
      history.push("/");
    } else {
      //show alert
    }
  };

  return (
    <>
      <section className="container">
        <Title title={isMember ? "LogIn" : "Register"}> </Title>
        <form className="login-form text-center container">
          {/* Single Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Single Input */}
          {/* Single Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!isMember && (
            <div className="form-group">
              <label htmlFor="username">User-name</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}

          {/* Single Input */}
          {/* empty form Inputs */}
          {isEmpty && (
            <div>
              <p className="text-danger">Please fill out all form fields.</p>
              <button
                type="submit"
                className="btn btn-block btn-secondary"
                disabled
              >
                Submit
              </button>
            </div>
          )}
          {!isEmpty && (
            <button
              type="submit"
              className="btn btn-block btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
          {/* Submit btn */}

          {/*  register link btn */}
          <p className="register-link mt-3">
            {isMember ? "need to register" : "already a member"}
            <button type="button" onClick={toggleMember}>
              Click Here
            </button>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
