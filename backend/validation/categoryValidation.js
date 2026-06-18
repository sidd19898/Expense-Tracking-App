const { z } = require("zod");

const createCategorySchema = z.object({
    name: z.string().min(1, "Category name is required"),

    parentCategory: z.string().optional()
});

module.exports = {
    createCategorySchema
};