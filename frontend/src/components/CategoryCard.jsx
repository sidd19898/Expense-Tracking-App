import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Box
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CategoryCard({

    category,

    categories,

    onEdit,

    onDelete

}) {

    const children = categories.filter(

        item => item.parentCategory?._id === category._id

    );

    return (

        <>

            <Card
                elevation={1}
                sx={{
                    mb: 2,
                    borderRadius: 3,
                    transition: "all .25s",

                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 5
                    }
                }}
            >

                <CardContent
                    sx={{
                        py: 1.5,
                        "&:last-child": {
                            pb: 1.5
                        }
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2
                            }}
                        >

                            <FolderIcon color="primary" />

                            <Typography variant="h6">

                                {category.name}

                            </Typography>

                        </Box>

                        <Box>

                            <IconButton
                                color="primary"
                                onClick={() => onEdit(category)}
                            >

                                <EditIcon />

                            </IconButton>

                            <IconButton
                                color="error"
                                onClick={() => onDelete(category)}
                            >

                                <DeleteIcon />

                            </IconButton>

                        </Box>

                    </Box>

                </CardContent>

            </Card>

            {

                children.length > 0 && (

                    <Box
                        sx={{
                            ml: 5,
                            borderLeft: "2px solid #e0e0e0",
                            pl: 2,
                            mb: 2
                        }}
                    >

                        {

                            children.map(child => (

                                <CategoryCard

                                    key={child._id}

                                    category={child}

                                    categories={categories}

                                    onEdit={onEdit}

                                    onDelete={onDelete}

                                />

                            ))

                        }

                    </Box>

                )

            }

        </>

    );

}