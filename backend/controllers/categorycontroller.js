const Category = require("../model/categoryModel");
const { createCategorySchema } = require("../validation/categoryValidation");

const createCategory = async (req, res) => {

    try {

        const result = createCategorySchema.safeParse(req.body);
        
        if (!result.success) {
            return res.status(400).json({
                message: result.error.issues[0].message
            });
        }

        const { name, parentCategory } = result.data;

        const exists = await Category.findOne({

    name,

    userId: req.user.id,

    parentCategory: parentCategory || null

});

if (exists) {

    return res.status(400).json({

        message: "Category already exists"

    });

}

        const category = await Category.create({

            name,

            parentCategory: parentCategory || null,

            userId: req.user.id

        });

        res.status(201).json({

            message: "Category Created",

            category

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

}

const getCategories = async (req, res) => {

    try {

        const categories = await Category.find({

            userId: req.user.id

        }).populate("parentCategory");

        res.json(categories);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

}

const updateCategory = async (req, res) => {

    try {

        const updated = await Category.findOneAndUpdate(

            {

                _id: req.params.id,

                userId: req.user.id

            },

            req.body,

            {

                new: true

            }

        );

        if (!updated) {

            return res.status(404).json({

                message: "Category not found"

            });

        }

        res.json(updated);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

}

const deleteCategory = async (req, res) => {

    try {

        const deleted = await Category.findOneAndDelete({

            _id: req.params.id,

            userId: req.user.id

        });

        if (!deleted) {

            return res.status(404).json({

                message: "Category not found"

            });

        }

        res.json({

            message: "Category Deleted"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

}

module.exports = {

    createCategory,

    getCategories,

    updateCategory,

    deleteCategory

};