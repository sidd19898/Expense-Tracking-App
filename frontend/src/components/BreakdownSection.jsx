import { Button, Typography } from "@mui/material";
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

        const updated = [...form.breakdown];

        updated.splice(index, 1);

        setForm({

            ...form,

            breakdown: updated

        });

    };

    const addItem = (parentIndex) => {

        const updated = [...form.breakdown];

        updated[parentIndex].items.push({

            category: "",

            amount: ""

        });

        setForm({

            ...form,

            breakdown: updated

        });

    };

    const updateItem = (

        parentIndex,

        itemIndex,

        field,

        value

    ) => {

        const updated = [...form.breakdown];

        updated[parentIndex].items[itemIndex] = {

            ...updated[parentIndex].items[itemIndex],

            [field]: value

        };

        setForm({

            ...form,

            breakdown: updated

        });

    };

    const deleteItem = (

        parentIndex,

        itemIndex

    ) => {

        const updated = [...form.breakdown];

        updated[parentIndex].items.splice(

            itemIndex,

            1

        );

        setForm({

            ...form,

            breakdown: updated

        });

    };

    return (

        <div style={{ marginTop: 35 }}>

            <Typography

                variant="h6"

                gutterBottom

            >

                Expense Breakdown

            </Typography>

            {

                form.breakdown.map((item, index) => (

                    <CategoryRow

                        key={index}

                        item={item}

                        index={index}

                        categories={categories}

                        updateCategory={updateCategory}

                        deleteCategory={deleteCategory}

                        addItem={addItem}

                        updateItem={updateItem}

                        deleteItem={deleteItem}

                    />

                ))

            }

            <Button

                variant="outlined"

                onClick={addCategory}

                sx={{ mt: 2 }}

            >

                + Add Category

            </Button>

        </div>

    );

}