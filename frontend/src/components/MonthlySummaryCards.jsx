import {
    Grid,
    Card,
    CardContent,
    Typography
} from "@mui/material";

export default function MonthlySummaryCards({ report }) {

    const cards = [

        {
            title: "Income",
            value: `₹${report.totalIncome}`
        },

        {
            title: "Expense",
            value: `₹${report.totalExpense}`
        },

        {
            title: "Savings",
            value: `₹${report.savings}`
        },

        {
            title: "Transactions",
            value: report.transactionCount
        }

    ];

    return (

        <Grid container spacing={3} sx={{ mb: 4 }}>

            {

                cards.map(card => (

                    <Grid item xs={12} md={3} key={card.title}>

                        <Card elevation={2}>

                            <CardContent>

                                <Typography
                                    color="text.secondary"
                                >

                                    {card.title}

                                </Typography>

                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    sx={{ mt: 1 }}
                                >

                                    {card.value}

                                </Typography>

                            </CardContent>

                        </Card>

                    </Grid>

                ))

            }

        </Grid>

    );

}