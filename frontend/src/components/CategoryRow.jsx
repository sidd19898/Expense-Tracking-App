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
    Typography

} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import ItemRow from "./ItemRow";

export default function CategoryRow({

    item,
    index,
    categories,
    updateCategory,
    deleteCategory,
    addItem,
    updateItem,
    deleteItem

}) {

    const childCategories = categories.filter(

        cat => cat.parentCategory?._id === item.category

    );

    return (

        <Paper

            elevation={2}

            sx={{

                p: 2,

                mb: 2

            }}

        >

            <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>

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

                <Grid item xs={12} md={3}>

                    <TextField

                        fullWidth

                        label="Amount"

                        type="number"

                        value={item.amount}

                        onChange={(e) =>

                            updateCategory(

                                index,

                                "amount",

                                Number(e.target.value)

                            )

                        }

                    />

                </Grid>

                <Grid item xs={6} md={3}>

                    <Button

                        variant="outlined"

                        onClick={() => addItem(index)}

                    >

                        + Item

                    </Button>

                </Grid>

                <Grid item xs={6} md={2}>

                    <IconButton

                        color="error"

                        onClick={() =>

                            deleteCategory(index)

                        }

                    >

                        <DeleteIcon />

                    </IconButton>

                </Grid>

            </Grid>

            {

                item.items.length > 0 && (

                    <Typography

                        sx={{ mt: 2, mb: 1 }}

                    >

                        Items

                    </Typography>

                )

            }

            {

                item.items.map((subItem, itemIndex) => (

                    <ItemRow

                        key={itemIndex}

                        item={subItem}

                        parentIndex={index}

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