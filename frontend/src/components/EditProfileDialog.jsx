import { useEffect, useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Stack
} from "@mui/material";

import { updateProfile } from "../api/profileApi";

export default function EditProfileDialog({

    open,

    onClose,

    profile,

    refreshProfile

}) {

    const [form, setForm] = useState({

        firstName: "",

        lastName: "",

        email: ""

    });

    useEffect(() => {

        if (profile) {

            setForm({

                firstName: profile.firstName,

                lastName: profile.lastName,

                email: profile.email

            });

        }

    }, [profile]);

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function handleSave() {

        try {

            await updateProfile(form);

            await refreshProfile();

            onClose();

        }

        catch (err) {

            alert(

                err.response?.data?.message

            );

        }

    }

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="sm"

        >

            <DialogTitle>

                Edit Profile

            </DialogTitle>

            <DialogContent>

                <Stack

                    spacing={2}

                    sx={{ mt: 1 }}

                >

                    <TextField

                        label="First Name"

                        name="firstName"

                        value={form.firstName}

                        onChange={handleChange}

                        fullWidth

                    />

                    <TextField

                        label="Last Name"

                        name="lastName"

                        value={form.lastName}

                        onChange={handleChange}

                        fullWidth

                    />

                    <TextField

                        label="Email"

                        name="email"

                        value={form.email}

                        onChange={handleChange}

                        fullWidth

                    />

                </Stack>

            </DialogContent>

            <DialogActions>

                <Button

                    onClick={onClose}

                >

                    Cancel

                </Button>

                <Button

                    variant="contained"

                    onClick={handleSave}

                >

                    Save

                </Button>

            </DialogActions>

        </Dialog>

    );

}