import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@material-ui/core";

export const FriendsForm = () => {
  return (
    <div>
      <TextField label="Name" />
      <TextField label="Input" />
      <Button>Add</Button>
    </div>
  );
};
