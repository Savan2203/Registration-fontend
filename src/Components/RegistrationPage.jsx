import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
const RegistrationPage = ({ role }) => {
  const { role: paramRole } = useParams();
  const userRole = role || paramRole;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      setFormData(values);

      const data = { ...values, role: userRole };
      console.log("user-------------->", data);
      const response = await axios.post(
        "http://localhost:5000/registerUser",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        alert(`${response.data.msg}`);
      }
      console.log("response------------->", response);
    } catch (error) {
      if (error.response) {
        alert(`${error.response.data.msg}`);
        console.error("Error Data:", error.response.data);
      } else {
        console.error("Registration failed", error);
      }
    }
  };

  return (
    <>
      <Box sx={{ backgroundColor: "white"    }}>
        <Card sx={{ minWidth: 275, padding: 3 }}>
          <Container maxWidth="sm">
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)}{" "}
                Registration
              </Typography>
              <Formik
                initialValues={{
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  email: formData.email,
                  password: formData.password,
                }}
                validationSchema={SignupSchema}
                enableReinitialize
                onSubmit={handleSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      fullWidth
                      style={{ margin: "8px" }}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      style={{ color: "red" }}
                    />

                    <TextField
                      name="lastName"
                      label="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      fullWidth
                      style={{ margin: "8px" }}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      style={{ color: "red" }}
                    />

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
                      style={{ color: "red" }}
                    />

                    <TextField
                      name="password"
                      label="Password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      fullWidth
                      style={{ margin: "8px" }}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
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
      </Box>
    </>
  );
};

export default RegistrationPage;
