const { z } = require("zod");

const itemSchema = z.object({
    category: z.string(),
    amount: z.number().positive()
});

const breakdownSchema = z.object({
    category: z.string(),
    amount: z.number().positive(),
    items: z.array(itemSchema)
});

const transactionSchema = z.object({

    title: z.string().min(1),

    type: z.enum(["Income", "Expense"]),

    totalAmount: z.number().positive(),

    paymentMethod: z.string().min(1),

    note: z.string().optional(),

    date: z.string(),

    breakdown: z.array(breakdownSchema)

});

module.exports = {
    transactionSchema
};