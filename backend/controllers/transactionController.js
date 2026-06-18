const Transaction = require("../model/transactionModel");
const { transactionSchema } = require("../validation/transactionValidation");

const createTransaction = async (req, res) => {

    try {

        const result = transactionSchema.safeParse(req.body);

        if (!result.success) {

            return res.status(400).json({
                message: result.error.issues[0].message
            });

        }

        const transaction = await Transaction.create({

            ...result.data,

            userId: req.user.id

        });

        res.status(201).json({

            message: "Transaction Created",

            transaction

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

const getTransactions = async (req, res) => {

    try {

        const transactions = await Transaction.find({

            userId: req.user.id

        })

        .populate("breakdown.category")

        .populate("breakdown.items.category")

        .sort({ date: -1 });

        res.json(transactions);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

const getTransaction = async (req, res) => {

    try {

        const transaction = await Transaction.findOne({

            _id: req.params.id,

            userId: req.user.id

        })

        .populate("breakdown.category")

        .populate("breakdown.items.category");

        if (!transaction) {

            return res.status(404).json({

                message: "Transaction not found"

            });

        }

        res.json(transaction);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

const updateTransaction = async (req, res) => {

    try {

        const transaction = await Transaction.findOneAndUpdate(

            {

                _id: req.params.id,

                userId: req.user.id

            },

            req.body,

            {

                new: true

            }

        );

        if (!transaction) {

            return res.status(404).json({

                message: "Transaction not found"

            });

        }

        res.json(transaction);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

const deleteTransaction = async (req, res) => {

    try {

        const transaction = await Transaction.findOneAndDelete({

            _id: req.params.id,

            userId: req.user.id

        });

        if (!transaction) {

            return res.status(404).json({

                message: "Transaction not found"

            });

        }

        res.json({

            message: "Transaction Deleted"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};





module.exports = {

    createTransaction,

    getTransactions,

    getTransaction,

    updateTransaction,

    deleteTransaction

};