import { useEffect, useState } from "react";

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
    MenuItem
} from "@mui/material";

export default function CategoryModal({

    open,
    onClose,
    onSave,
    categories,
    editingCategory

}) {

    const [form, setForm] = useState({

        name: "",

        parentCategory: ""

    });

    useEffect(() => {

        if (open) {

            setForm({

                name: "",

                parentCategory: ""

            });

        }

    }, [open]);

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    function handleSave() {

        onSave({

            name: form.name,

            parentCategory: form.parentCategory || null

        });

    }

    useEffect(() => {

    if (editingCategory) {

        setForm({

            name: editingCategory.name,

            parentCategory:
                editingCategory.parentCategory?._id || ""

        });

    }

    else {

        setForm({

            name: "",

            parentCategory: ""

        });

    }

}, [editingCategory, open]);

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

<DialogTitle>

    {

        editingCategory

            ? "Edit Category"

            : "Add Category"

    }

</DialogTitle>

            <DialogContent>

                <TextField

                    fullWidth

                    margin="normal"

                    label="Category Name"

                    name="name"

                    value={form.name}

                    onChange={handleChange}

                />

                <FormControl
                    fullWidth
                    margin="normal"
                >

                    <InputLabel>

                        Parent Category

                    </InputLabel>

                    <Select

                        name="parentCategory"

                        value={form.parentCategory}

                        label="Parent Category"

                        onChange={handleChange}

                    >

                        <MenuItem value="">

                            None

                        </MenuItem>

                        {

                            categories
                                .filter(cat => cat.parentCategory === null)
                                .map(category => (

                                    <MenuItem

                                        key={category._id}

                                        value={category._id}

                                    >

                                        {category.name}

                                    </MenuItem>

                                ))

                        }

                    </Select>

                </FormControl>

            </DialogContent>

            <DialogActions>

                <Button onClick={onClose}>

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