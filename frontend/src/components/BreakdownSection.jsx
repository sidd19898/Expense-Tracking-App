import {
    Button,
    Typography,
    Box
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import CategoryRow from "./CategoryRow";

export default function BreakdownSection({

    form,
    setForm,
    categories

}) {

    const addCategory = () => {

        setForm({

            ...form,

            breakdown: [

                ...form.breakdown,

                {

                    category: "",

                    amount: "",

                    items: []

                }

            ]

        });

    };

    const updateCategory = (index, field, value) => {

        const updated = [...form.breakdown];

        updated[index] = {

            ...updated[index],

            [field]: value

        };

        setForm({

            ...form,

            breakdown: updated

        });

    };

    const deleteCategory = (index) => {

        const updated = form.breakdown.filter(

            (_, i) => i !== index

        );

        setForm({

            ...form,

            breakdown: updated

        });

    };

    return (

        <Box sx={{ mt: 4 }}>

            <Typography
                variant="h6"
                gutterBottom
            >

                Expense Breakdown

            </Typography>

            {

                form.breakdown.length === 0 && (

                    <Typography

                        color="text.secondary"

                        sx={{

                            mb: 2

                        }}

                    >

                        No categories added yet.

                    </Typography>

                )

            }

            {

                form.breakdown.map((item, index) => (

                    <CategoryRow

                        key={index}

                        item={item}

                        index={index}

                        categories={categories}

                        updateCategory={updateCategory}

                        deleteCategory={deleteCategory}

                    />

                ))

            }

            <Button

                variant="contained"

                startIcon={<AddIcon />}

                onClick={addCategory}

                sx={{

                    mt: 2

                }}

            >

                Add Category

            </Button>

        </Box>

    );

}