import { useState } from "react";
import { signup } from "../api/authApi";
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

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SavingsIcon from "@mui/icons-material/Savings";

import "./Auth.css";

export default function Signup() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({

        firstName: "",

        lastName: "",

        email: "",

        password: ""

    });

    const handleSignup = async () => {

        try {

            await signup(form);

            alert("Signup Successful");

            navigate("/");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Signup Failed"

            );

        }

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

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

                    sx={{ mb: 4 }}

                >

                    Create your account

                </Typography>

                <Box

                    sx={{

                        display: "flex",

                        gap: 2

                    }}

                >

                    <TextField

                        fullWidth

                        label="First Name"

                        name="firstName"

                        value={form.firstName}

                        onChange={handleChange}

                        margin="normal"

                        InputProps={{

                            startAdornment: (

                                <InputAdornment position="start">

                                    <PersonIcon color="action"/>

                                </InputAdornment>

                            )

                        }}

                    />

                    <TextField

                        fullWidth

                        label="Last Name"

                        name="lastName"

                        value={form.lastName}

                        onChange={handleChange}

                        margin="normal"

                        InputProps={{

                            startAdornment: (

                                <InputAdornment position="start">

                                    <PersonIcon color="action"/>

                                </InputAdornment>

                            )

                        }}

                    />

                </Box>

                <TextField

                    fullWidth

                    label="Email"

                    name="email"

                    value={form.email}

                    onChange={handleChange}

                    margin="normal"

                    InputProps={{

                        startAdornment: (

                            <InputAdornment position="start">

                                <EmailIcon color="action"/>

                            </InputAdornment>

                        )

                    }}

                />

                <TextField

                    fullWidth

                    type={

                        showPassword

                            ?

                            "text"

                            :

                            "password"

                    }

                    label="Password"

                    name="password"

                    value={form.password}

                    onChange={handleChange}

                    margin="normal"

                    InputProps={{

                        startAdornment: (

                            <InputAdornment position="start">

                                <LockIcon color="action"/>

                            </InputAdornment>

                        ),

                        endAdornment: (

                            <InputAdornment position="end">

                                <IconButton

                                    onClick={()=>

                                        setShowPassword(

                                            !showPassword

                                        )

                                    }

                                >

                                    {

                                        showPassword

                                        ?

                                        <VisibilityOff/>

                                        :

                                        <Visibility/>

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

                        mt:3,

                        py:1.5,

                        borderRadius:2,

                        textTransform:"none",

                        fontWeight:600

                    }}

                    onClick={handleSignup}

                >

                    Create Account

                </Button>

                <Typography

                    align="center"

                    sx={{

                        mt:3,

                        color:"text.secondary"

                    }}

                >

                    Already have an account?{" "}

                    <Link

                        to="/"

                        style={{

                            textDecoration:"none",

                            fontWeight:600

                        }}

                    >

                        Login

                    </Link>

                </Typography>

            </Paper>

        </Box>

    );

}