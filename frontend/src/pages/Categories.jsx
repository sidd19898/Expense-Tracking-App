import { useEffect, useState } from "react";
import "./Categories.css";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Loading from "../components/Loading";
import CategoryCard from "../components/CategoryCard";
import CategoryModal from "../components/CategoryModal";

import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../api/categoryApi";

export default function Categories() {

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);

    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {

        fetchCategories();

    }, []);

    async function fetchCategories() {

        try {

            const data = await getCategories();

            setCategories(data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    }

    function handleEdit(category) {

        setEditingCategory(category);

        setOpen(true);

    }

    async function handleDelete(category) {

        const confirmDelete = window.confirm(

            `Delete "${category.name}"?`

        );

        if (!confirmDelete) {

            return;

        }

        try {

            await deleteCategory(category._id);

            alert("Category Deleted");

            await fetchCategories();

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Something went wrong"

            );

        }

    }

    async function handleSave(category) {

        try {

            if (editingCategory) {

                await updateCategory(

                    editingCategory._id,

                    category

                );

            }

            else {

                await createCategory(category);

            }

            setOpen(false);

            setEditingCategory(null);

            await fetchCategories();

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Something went wrong"

            );

        }

    }

    if (loading) {

        return <Loading />;

    }

    return (

        <div className="categories-page">

            <div className="categories-header">

                <div>

                    <h1>

                        Categories

                    </h1>

                    <p>

                        Manage your expense categories

                    </p>

                </div>

                <Button

                    variant="contained"

                    startIcon={<AddIcon />}
                     

                     sx={{

        minWidth:{

            xs:"100%",

            sm:"220px"

        },

        mt:{

            xs:2,

            sm:0

        }

    }}

                    onClick={() => {

                        setEditingCategory(null);

                        setOpen(true);

                    }}

                >

                    Add Category

                </Button>

            </div>

            {

                categories.length === 0 ?

                    (

                        <h3>

                            No Categories Found

                        </h3>

                    )

                    :

                    (

                        categories

                            .filter(category => !category.parentCategory)

                            .map(category => (

                                <CategoryCard

                                    key={category._id}

                                    category={category}

                                    categories={categories}

                                    onEdit={handleEdit}

                                    onDelete={handleDelete}

                                />

                            ))

                    )

            }

            <CategoryModal

                open={open}

                onClose={() => {

                    setOpen(false);

                    setEditingCategory(null);

                }}

                onSave={handleSave}

                categories={categories}

                editingCategory={editingCategory}

            />

        </div>

    );

}