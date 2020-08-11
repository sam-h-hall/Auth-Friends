import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@material-ui/core";

export const Login = () => {
  return (
    <div>
      <TextField variant="outlined" label="Username" />
      <TextField variant="outlined" label="Password" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
};
