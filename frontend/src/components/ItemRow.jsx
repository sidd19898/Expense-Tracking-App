import {
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    IconButton
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export default function ItemRow({

    item,

    itemIndex,

    categories,

    updateItem,

    deleteItem

}) {

    return (

        <Grid

            container

            spacing={2}

            alignItems="center"

            sx={{

                mt: 2,

                ml: 3

            }}

        >

            <Grid item xs={12} md={5}>

                <FormControl fullWidth>

                    <InputLabel>

                        Item

                    </InputLabel>

                    <Select

                        value={item.category}

                        label="Item"

                        onChange={(e) =>

                            updateItem(

                                itemIndex,

                                "category",

                                e.target.value

                            )

                        }

                    >

                        {

                            categories.map(category => (

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

            <Grid item xs={12} md={5}>

                <TextField

                    fullWidth

                    label="Amount"

                    type="number"

                    value={item.amount}

                    onChange={(e) =>

                        updateItem(

                            itemIndex,

                            "amount",

                            e.target.value

                        )

                    }

                />

            </Grid>

            <Grid item xs={12} md={2}>

                <IconButton

                    color="error"

                    onClick={() =>

                        deleteItem(

                            itemIndex

                        )

                    }

                >

                    <DeleteIcon />

                </IconButton>

            </Grid>

        </Grid>

    );

}