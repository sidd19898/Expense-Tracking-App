import {
    Grid,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    IconButton,
    Typography,
    Box
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import ItemRow from "./ItemRow";

export default function CategoryRow({

    item,
    index,
    categories,
    updateCategory,
    deleteCategory

}) {

    const addItem = () => {

        const updatedItems = [

            ...item.items,

            {

                category: "",

                amount: ""

            }

        ];

        updateCategory(

            index,

            "items",

            updatedItems

        );

    };

    const updateItem = (itemIndex, field, value) => {

        const updatedItems = [...item.items];

        updatedItems[itemIndex] = {

            ...updatedItems[itemIndex],

            [field]: value

        };

        updateCategory(

            index,

            "items",

            updatedItems

        );

    };

    const deleteItem = (itemIndex) => {

        const updatedItems = item.items.filter(

            (_, i) => i !== itemIndex

        );

        updateCategory(

            index,

            "items",

            updatedItems

        );

    };

    const childCategories = categories.filter(

        cat =>

            cat.parentCategory?._id === item.category

    );

    return (

        <Paper

            elevation={2}

            sx={{

                p: 2,

                mb: 2,

                borderRadius: 2

            }}

        >

            <Grid

                container

                spacing={2}

                alignItems="center"

            >

                <Grid item xs={12} md={5}>

                    <FormControl fullWidth>

                        <InputLabel>

                            Category

                        </InputLabel>

                        <Select

                            value={item.category}

                            label="Category"

                            onChange={(e) =>

                                updateCategory(

                                    index,

                                    "category",

                                    e.target.value

                                )

                            }

                        >

                            {

                                categories

                                    .filter(cat => !cat.parentCategory)

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

                </Grid>

                <Grid item xs={12} md={4}>

                    <TextField

                        fullWidth

                        label="Amount"

                        type="number"

                        value={item.amount}

                        onChange={(e) =>

                            updateCategory(

                                index,

                                "amount",

                                e.target.value

                            )

                        }

                    />

                </Grid>

                <Grid item xs={6} md={2}>

                    <Button

                        variant="outlined"

                        startIcon={<AddIcon />}

                        onClick={addItem}

                        fullWidth

                    >

                        Item

                    </Button>

                </Grid>

                <Grid item xs={6} md={1}>

                    <IconButton

                        color="error"

                        onClick={() => deleteCategory(index)}

                    >

                        <DeleteIcon />

                    </IconButton>

                </Grid>

            </Grid>

            {

                childCategories.length > 0 && (

                    <Box sx={{ mt: 3 }}>

                        <Typography

                            variant="subtitle2"

                            gutterBottom

                        >

                            Items

                        </Typography>

                    </Box>

                )

            }

            {

                item.items.map((child, itemIndex) => (

                    <ItemRow

                        key={itemIndex}

                        item={child}

                        itemIndex={itemIndex}

                        categories={childCategories}

                        updateItem={updateItem}

                        deleteItem={deleteItem}

                    />

                ))

            }

        </Paper>

    );

}