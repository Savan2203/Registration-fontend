import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();


    const handleRegistration = (role) => {
        navigate(`/register/${role}`, { state: { role } });
    };
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5, p: 3, textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>Welcome to the App</Typography>
                <Typography variant="body1" gutterBottom>
                    Please choose your registration type:
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleRegistration("customer")}
                    >
                        Register as Customer
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleRegistration("admin")}
                    >
                        Register as Admin
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
