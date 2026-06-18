const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {

    createTransaction,
    getTransactions,
    getTransaction,
    updateTransaction,
    deleteTransaction

} = require("../controllers/transactionController");

router.post("/", auth, createTransaction);

router.get("/", auth, getTransactions);

router.get("/:id", auth, getTransaction);

router.put("/:id", auth, updateTransaction);

router.delete("/:id", auth, deleteTransaction);

module.exports = router;