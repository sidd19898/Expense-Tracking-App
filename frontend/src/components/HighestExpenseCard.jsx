import {
    Card,
    CardContent,
    Typography,
    Grid
} from "@mui/material";

export default function HighestExpenseCard({ expense }) {

    if (!expense) {

        return (

            <Card sx={{ mb: 4 }}>

                <CardContent>

                    <Typography variant="h6">

                        Highest Expense

                    </Typography>

                    <Typography color="text.secondary">

                        No expense found for this month.

                    </Typography>

                </CardContent>

            </Card>

        );

    }

    return (

        <Card sx={{ mb: 4 }}>

            <CardContent>

                <Typography
                    variant="h6"
                    gutterBottom
                >

                    Highest Expense

                </Typography>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={3}>

                        <Typography color="text.secondary">

                            Title

                        </Typography>

                        <Typography variant="h6">

                            {expense.title}

                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={3}>

                        <Typography color="text.secondary">

                            Amount

                        </Typography>

                        <Typography variant="h6">

                            ₹{expense.totalAmount}

                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={3}>

                        <Typography color="text.secondary">

                            Payment

                        </Typography>

                        <Typography>

                            {expense.paymentMethod}

                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={3}>

                        <Typography color="text.secondary">

                            Date

                        </Typography>

                        <Typography>

                            {new Date(expense.date).toLocaleDateString()}

                        </Typography>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );

}