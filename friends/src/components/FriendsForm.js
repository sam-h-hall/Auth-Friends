import React from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FriendsForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    axiosWithAuth()
      .post("/friends", { ...values, id: Date.now() })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Formik
        initialValues={{ id: 0, name: "", age: "", email: "" }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}>
        {(props) => {
          const { values, handleSubmit, handleChange } = props;
          return (
            <form onSubmit={handleSubmit}>
              <TextField
                // variant=""
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <TextField
                // variant=""
                label="Age"
                name="age"
                value={values.age}
                onChange={handleChange}
              />
              <TextField
                // variant=""
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <Button type="submit">Add</Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
