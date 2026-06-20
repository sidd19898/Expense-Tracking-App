import { useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Stack
} from "@mui/material";

import { changePassword } from "../api/profileApi";

export default function ChangePasswordDialog({

    open,

    onClose

}) {

    const [form, setForm] = useState({

        currentPassword: "",

        newPassword: "",

        confirmPassword: ""

    });

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function handleSave() {

        if (form.newPassword !== form.confirmPassword) {

            alert("Passwords do not match");

            return;

        }

        try {

            await changePassword({

                currentPassword: form.currentPassword,

                newPassword: form.newPassword

            });

            setForm({

                currentPassword: "",

                newPassword: "",

                confirmPassword: ""

            });

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

                Change Password

            </DialogTitle>

            <DialogContent>

                <Stack

                    spacing={2}

                    sx={{ mt: 1 }}

                >

                    <TextField

                        label="Current Password"

                        type="password"

                        name="currentPassword"

                        value={form.currentPassword}

                        onChange={handleChange}

                        fullWidth

                    />

                    <TextField

                        label="New Password"

                        type="password"

                        name="newPassword"

                        value={form.newPassword}

                        onChange={handleChange}

                        fullWidth

                    />

                    <TextField

                        label="Confirm Password"

                        type="password"

                        name="confirmPassword"

                        value={form.confirmPassword}

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

                    Change Password

                </Button>

            </DialogActions>

        </Dialog>

    );

}