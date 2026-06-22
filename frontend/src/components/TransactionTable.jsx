import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";

import TransactionRow from "./TransactionRow";

export default function TransactionTable({

    transactions,

    onEdit,

    onDelete

}) {

    return (

        <TableContainer

            component={Paper}

            sx={{

                overflowX: "auto"

            }}

        >

            <Table

                sx={{

                    minWidth: 700

                }}

            >

                <TableHead>

                    <TableRow>

                        <TableCell>

                            Date

                        </TableCell>

                        <TableCell>

                            Title

                        </TableCell>

                        <TableCell>

                            Type

                        </TableCell>

                        <TableCell>

                            Amount

                        </TableCell>

                        <TableCell>

                            Payment

                        </TableCell>

                        <TableCell>

                            Action

                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        transactions.map(transaction => (

                            <TransactionRow

                                key={transaction._id}

                                transaction={transaction}

                                onEdit={onEdit}

                                onDelete={onDelete}

                            />

                        ))

                    }

                </TableBody>

            </Table>

        </TableContainer>

    );

}