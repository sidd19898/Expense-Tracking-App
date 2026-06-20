import { useEffect, useState } from "react";
import "./Transactions.css";

import {
    Button
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Loading from "../components/Loading";
import TransactionTable from "../components/TransactionTable";
import TransactionModal from "../components/TransactionModal";

import {
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction
} from "../api/transactionApi";

export default function Transactions() {

    const [transactions, setTransactions] = useState([]);

    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);

    const [editingTransaction, setEditingTransaction] = useState(null);

    useEffect(() => {

        fetchTransactions();

    }, []);

    async function fetchTransactions() {

        try {

            const data = await getTransactions();

            setTransactions(data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    }

    function handleEdit(transaction) {

        setEditingTransaction(transaction);

        setOpen(true);

    }

    async function handleDelete(transaction) {

    const confirmDelete = window.confirm(

        `Delete "${transaction.title}"?`

    );

    if (!confirmDelete) {

        return;

    }

    try {

        await deleteTransaction(transaction._id);

        await fetchTransactions();

    }

    catch (err) {

        alert(

            err.response?.data?.message ||

            "Failed to delete transaction"

        );

    }

}

    async function handleSave(transaction) {

    try {

        if (!transaction.title.trim()) {

            alert("Title is required");

            return;

        }

        if (!transaction.totalAmount) {

            alert("Amount is required");

            return;

        }

        if (!transaction.paymentMethod) {

            alert("Payment Method is required");

            return;

        }

        if (
            transaction.type === "Expense" &&
            transaction.breakdown.length === 0
        ) {

            alert("Please add at least one category.");

            return;

        }

        if (editingTransaction) {

            await updateTransaction(

                editingTransaction._id,

                transaction

            );

        }

        else {

            await createTransaction(transaction);

        }

        setOpen(false);

        setEditingTransaction(null);

        await fetchTransactions();

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

        <div className="transactions-page">

            <div className="transactions-header">

                <div>

                    <h1>

                        Transactions

                    </h1>

                    <p>

                        Manage all your transactions

                    </p>

                </div>

                <Button

                    variant="contained"

                    startIcon={<AddIcon />}

                    onClick={() => {

                        setEditingTransaction(null);

                        setOpen(true);

                    }}

                >

                    Add Transaction

                </Button>

            </div>

            {

                transactions.length === 0 ?

                    (

                        <h3>

                            No Transactions Found

                        </h3>

                    )

                    :

                    (

                        <TransactionTable

                            transactions={transactions}

                            onEdit={handleEdit}

                            onDelete={handleDelete}

                        />

                    )

            }

            <TransactionModal

                open={open}

                onClose={() => {

                    setOpen(false);

                    setEditingTransaction(null);

                }}

                onSave={handleSave}

                editingTransaction={editingTransaction}

            />

        </div>

    );

}