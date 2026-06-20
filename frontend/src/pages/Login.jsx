import { useState } from "react";
import { login } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";

import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SavingsIcon from "@mui/icons-material/Savings";

import "./Auth.css";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {

        try {

            const response = await login({

                email,

                password

            });

            localStorage.setItem(

                "token",

                response.token

            );

            navigate("/dashboard");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <Box className="auth-page">

            <Paper

                elevation={10}

                className="auth-card"

                sx={{

                    p: 5,

                    bgcolor: "white"

                }}

            >

                {/* Logo */}

                <Box

                    sx={{

                        display: "flex",

                        justifyContent: "center",

                        alignItems: "center",

                        gap: 2,

                        mb: 1

                    }}

                >

                    <SavingsIcon

                        color="primary"

                        sx={{

                            fontSize: 48

                        }}

                    />

                    <Typography

                        sx={{

                            fontSize: "2.2rem",

                            fontWeight: 700,

                            lineHeight: 1

                        }}

                    >

                        Expense Tracker

                    </Typography>

                </Box>

                <Typography

                    align="center"

                    color="text.secondary"

                    sx={{

                        mb: 4

                    }}

                >

                    Sign in to continue

                </Typography>

                <TextField

                    fullWidth

                    label="Email"

                    value={email}

                    onChange={(e) =>

                        setEmail(

                            e.target.value

                        )

                    }

                    margin="normal"

                    sx={{

                        "& .MuiOutlinedInput-root": {

                            borderRadius: 2

                        }

                    }}

                    InputProps={{

                        startAdornment: (

                            <InputAdornment position="start">

                                <EmailIcon color="action" />

                            </InputAdornment>

                        )

                    }}

                />

                <TextField

                    fullWidth

                    type={

                        showPassword

                            ? "text"

                            : "password"

                    }

                    label="Password"

                    value={password}

                    onChange={(e) =>

                        setPassword(

                            e.target.value

                        )

                    }

                    margin="normal"

                    sx={{

                        "& .MuiOutlinedInput-root": {

                            borderRadius: 2

                        }

                    }}

                    InputProps={{

                        startAdornment: (

                            <InputAdornment position="start">

                                <LockIcon color="action" />

                            </InputAdornment>

                        ),

                        endAdornment: (

                            <InputAdornment position="end">

                                <IconButton

                                    onClick={() =>

                                        setShowPassword(

                                            !showPassword

                                        )

                                    }

                                >

                                    {

                                        showPassword

                                            ?

                                            <VisibilityOff />

                                            :

                                            <Visibility />

                                    }

                                </IconButton>

                            </InputAdornment>

                        )

                    }}

                />

                <Button

                    fullWidth

                    variant="contained"

                    size="large"

                    sx={{

                        mt: 3,

                        py: 1.5,

                        borderRadius: 2,

                        fontWeight: 600,

                        fontSize: "1rem",

                        textTransform: "none"

                    }}

                    onClick={handleLogin}

                >

                    Login

                </Button>

                <Typography

                    align="center"

                    sx={{

                        mt: 3,

                        color: "text.secondary"

                    }}

                >

                    Don't have an account?{" "}

                    <Link

                        to="/signup"

                        style={{

                            textDecoration: "none",

                            fontWeight: 600

                        }}

                    >

                        Sign Up

                    </Link>

                </Typography>

            </Paper>

        </Box>

    );

}