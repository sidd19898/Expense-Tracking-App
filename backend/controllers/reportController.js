const mongoose = require("mongoose");
const Transaction = require("../model/transactionModel");

const getMonthlyTotals = async (userId, startDate, endDate) => {

    const result = await Transaction.aggregate([

        {
            $match: {
                userId: new mongoose.Types.ObjectId(userId),
                date: {
                    $gte: startDate,
                    $lt: endDate
                }
            }
        },

        {
            $group: {
                _id: "$type",
                total: {
                    $sum: "$totalAmount"
                }
            }
        }

    ]);

    let income = 0;
    let expense = 0;

    result.forEach(item => {

        if (item._id === "Income")
            income = item.total;

        if (item._id === "Expense")
            expense = item.total;

    });

    return {
        income,
        expense,
        savings: income - expense
    };

};

const dashboard = async (req, res) => {

    try {

        const userId = new mongoose.Types.ObjectId(req.user.id);

        const totals = await Transaction.aggregate([

            {
                $match: {
                    userId
                }
            },

            {
                $group: {
                    _id: "$type",
                    total: {
                        $sum: "$totalAmount"
                    }
                }
            }

        ]);

        let totalIncome = 0;
        let totalExpense = 0;

        totals.forEach(item => {

            if (item._id === "Income")
                totalIncome = item.total;

            if (item._id === "Expense")
                totalExpense = item.total;

        });

        const recentTransactions = await Transaction.find({
            userId
        })
        .sort({ date: -1 })
        .limit(5);

        const transactionCount = await Transaction.countDocuments({
            userId
        });

        res.json({

            totalIncome,

            totalExpense,

            balance: totalIncome - totalExpense,

            transactions: transactionCount,

            recentTransactions

        });

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const monthlyReport = async (req, res) => {

    try {

        const month = Number(req.query.month);
        const year = Number(req.query.year);

        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 1);

        const totals = await getMonthlyTotals(
            req.user.id,
            startDate,
            endDate
        );

        const highestExpense = await Transaction.findOne({

            userId: req.user.id,

            type: "Expense",

            date: {

                $gte: startDate,

                $lt: endDate

            }

        })

        .sort({

            totalAmount: -1

        });

        const transactionCount = await Transaction.countDocuments({

            userId: req.user.id,

            date: {

                $gte: startDate,

                $lt: endDate

            }

        });

        res.json({

            month,

            year,

            totalIncome: totals.income,

            totalExpense: totals.expense,

            savings: totals.savings,

            transactionCount,

            highestExpense

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

const monthlyComparison = async (req, res) => {

    try {

        const month = Number(req.query.month);
        const year = Number(req.query.year);

        const currentStart = new Date(year, month - 1, 1);
        const currentEnd = new Date(year, month, 1);

        const previousStart = new Date(year, month - 2, 1);
        const previousEnd = new Date(year, month - 1, 1);

        const current = await getMonthlyTotals(
            req.user.id,
            currentStart,
            currentEnd
        );

        const previous = await getMonthlyTotals(
            req.user.id,
            previousStart,
            previousEnd
        );

        res.json({

            currentMonth: {

                month,

                year,

                ...current

            },

            previousMonth: {

                month: month - 1,

                year,

                ...previous

            },

            incomeDifference:

                current.income - previous.income,

            expenseDifference:

                current.expense - previous.expense,

            savingDifference:

                current.savings - previous.savings,

            incomeTrend:

                current.income >= previous.income

                    ? "Increased"

                    : "Decreased",

            expenseTrend:

                current.expense >= previous.expense

                    ? "Increased"

                    : "Decreased"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

module.exports = {

    dashboard,

    monthlyReport,

    monthlyComparison

};