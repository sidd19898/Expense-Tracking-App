import { useEffect, useState } from "react";
import { getCategories } from "../api/categoryApi";
import BreakdownSection from "./BreakdownSection";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid
} from "@mui/material";

export default function TransactionModal({

    open,
    onClose,
    onSave,
    editingTransaction

}) {

    const [categories, setCategories] = useState([]);

    const [form, setForm] = useState({

        title: "",

        type: "Expense",

        totalAmount: "",

        paymentMethod: "",

        note: "",

        date: new Date().toISOString().split("T")[0],

        breakdown: []

    });

    useEffect(() => {

        if (open) {

            fetchCategories();

        }

    }, [open]);

    useEffect(() => {

        if (editingTransaction) {

            setForm({

                title: editingTransaction.title,

                type: editingTransaction.type,

                totalAmount: editingTransaction.totalAmount,

                paymentMethod: editingTransaction.paymentMethod,

                note: editingTransaction.note,

                date: editingTransaction.date.split("T")[0],

                breakdown: editingTransaction.breakdown || []

            });

        }

        else {

            setForm({

                title: "",

                type: "Expense",

                totalAmount: "",

                paymentMethod: "",

                note: "",

                date: new Date().toISOString().split("T")[0],

                breakdown: []

            });

        }

    }, [editingTransaction, open]);

    async function fetchCategories() {

        try {

            const data = await getCategories();

            setCategories(data);

        }

        catch (err) {

            console.log(err);

        }

    }

 function handleChange(e) {

    const { name, value } = e.target;

    setForm({

        ...form,

        [name]:
            name === "totalAmount"
                ? Number(value)
                : value

    });

}

    function handleSave() {

        onSave(form);

    }

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="lg"

            PaperProps={{

                sx: {

                    borderRadius: 3,

                    p: 2

                }

            }}

        >

            <DialogTitle>

                {

                    editingTransaction

                        ? "Edit Transaction"

                        : "Add Transaction"

                }

            </DialogTitle>

            <DialogContent>

                <Grid container spacing={3} sx={{ mt: 1 }}>

                    <Grid item xs={12} md={6}>

                        <TextField

                            fullWidth

                            label="Title"

                            name="title"

                            value={form.title}

                            onChange={handleChange}

                        />

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField

                            fullWidth

                            label="Amount"

                            type="number"

                            name="totalAmount"

                            value={form.totalAmount}

                            onChange={handleChange}

                        />

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <FormControl fullWidth>

                            <InputLabel>

                                Type

                            </InputLabel>

                            <Select

                                name="type"

                                value={form.type}

                                label="Type"

                                onChange={handleChange}

                            >

                                <MenuItem value="Expense">

                                    Expense

                                </MenuItem>

                                <MenuItem value="Income">

                                    Income

                                </MenuItem>

                            </Select>

                        </FormControl>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <FormControl fullWidth>

                            <InputLabel>

                                Payment Method

                            </InputLabel>

                            <Select

                                name="paymentMethod"

                                value={form.paymentMethod}

                                label="Payment Method"

                                onChange={handleChange}

                            >

                                <MenuItem value="UPI">

                                    UPI

                                </MenuItem>

                                <MenuItem value="Cash">

                                    Cash

                                </MenuItem>

                                <MenuItem value="Card">

                                    Card

                                </MenuItem>

                                <MenuItem value="Net Banking">

                                    Net Banking

                                </MenuItem>

                            </Select>

                        </FormControl>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField

                            fullWidth

                            label="Date"

                            type="date"

                            name="date"

                            value={form.date}

                            onChange={handleChange}

                            InputLabelProps={{

                                shrink: true

                            }}

                        />

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField

                            fullWidth

                            multiline

                            rows={4}

                            label="Note"

                            name="note"

                            value={form.note}

                            onChange={handleChange}

                        />

                    </Grid>

                </Grid>

                {

                    form.type === "Expense" && (

                        <BreakdownSection

                            form={form}

                            setForm={setForm}

                            categories={categories}

                        />

                    )

                }

            </DialogContent>

            <DialogActions

                sx={{

                    px: 3,

                    pb: 3,

                    justifyContent: "flex-end",

                    gap: 1

                }}

            >

                <Button

                    onClick={onClose}

                >

                    Cancel

                </Button>

                <Button

                    variant="contained"

                    onClick={handleSave}

                >

                    {

                        editingTransaction

                            ? "Update"

                            : "Save"

                    }

                </Button>

            </DialogActions>

        </Dialog>

    );

}