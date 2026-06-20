import {

    TableRow,
    TableCell,
    IconButton

} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TransactionRow({

    transaction,

    onEdit,

    onDelete

}) {

    return (

        <TableRow>

            <TableCell>

                {

                    new Date(transaction.date)

                        .toLocaleDateString()

                }

            </TableCell>

            <TableCell>

                {transaction.title}

            </TableCell>

            <TableCell>

                {transaction.type}

            </TableCell>

            <TableCell>

                ₹{transaction.totalAmount}

            </TableCell>

            <TableCell>

                {transaction.paymentMethod}

            </TableCell>

            <TableCell>

                <IconButton

                    color="primary"

                    onClick={() => onEdit(transaction)}

                >

                    <EditIcon />

                </IconButton>

                <IconButton

                    color="error"

                    onClick={() => onDelete(transaction)}

                >

                    <DeleteIcon />

                </IconButton>

            </TableCell>

        </TableRow>

    );

}