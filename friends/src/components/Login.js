import React from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  const handleSubmit = (values) => {
    // e.preventDefault();
    console.log(values);
    axiosWithAuth()
      .post("/login", values)
      .then((res) => {
        console.log(res);
        localStorage.setItem("authToken", res.data.payload);
        history.push("/friends");
      })
      .catch((err) => {
        localStorage.removeItem("authToken");
      });
  };

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }} //if i set initialValues to {{credentials: { username: "", password; ""}}} (see below) it won't work
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}>
        {(props) => {
          const { values, handleSubmit, handleChange } = props;
          return (
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Username"
                name="username" // "credentials.username"
                value={values.username} // values.credentials.username
                onChange={handleChange}
              />
              <TextField
                // variant="outlined"
                variant="standard"
                label="Password"
                name="password" // "credentials.password"
                value={values.password} // "values.credentials.password"
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
