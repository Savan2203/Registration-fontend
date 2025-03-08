import { Box, Button, Card, Container, TextField } from "@mui/material";
import axios from "axios";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (values) => {
    try {
      setFormData(values);

      const data = { ...values };
      console.log("user-------------->", data);
      const response = await axios.post(
        "http://localhost:5000/verifyAdmin",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        alert(`${response.data.message}`);
      }
      console.log("response------------->", response);
    } catch (error) {
      if (error.response) {
        alert(`${error.response.data.message}`);
        console.error("Error Data:", error.response.data);
      } else {
        console.error("Registration failed", error);
      }
    }
  };
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <Container maxWidth="sm">
          <Box sx={{ mt: 4, mb: 4 }}>
            <Formik
              initialValues={{
                email: formData.email,
                password: formData.password,
              }}
              enableReinitialize
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <TextField
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                    style={{ margin: "8px" }}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                    style={{ color: "red" }}
                  />
                  <TextField
                    name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    fullWidth
                    style={{ margin: "8px" }}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                    style={{ color: "red" }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Card>
    </>
  );
};

export default AdminLogin;
