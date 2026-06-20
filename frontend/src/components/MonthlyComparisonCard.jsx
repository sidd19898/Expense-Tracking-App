import {
    Card,
    CardContent,
    Grid,
    Typography,
    Divider
} from "@mui/material";

export default function MonthlyComparisonCard({ comparison }) {

    if (!comparison) {

        return null;

    }

    return (

        <Card sx={{ mb: 4 }}>

            <CardContent>

                <Typography
                    variant="h6"
                    gutterBottom
                >

                    Month Comparison

                </Typography>

                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>

                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                        >

                            Current Month

                        </Typography>

                        <Typography>

                            Income : ₹{comparison.currentMonth.income}

                        </Typography>

                        <Typography>

                            Expense : ₹{comparison.currentMonth.expense}

                        </Typography>

                        <Typography>

                            Savings : ₹{comparison.currentMonth.savings}

                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                        >

                            Previous Month

                        </Typography>

                        <Typography>

                            Income : ₹{comparison.previousMonth.income}

                        </Typography>

                        <Typography>

                            Expense : ₹{comparison.previousMonth.expense}

                        </Typography>

                        <Typography>

                            Savings : ₹{comparison.previousMonth.savings}

                        </Typography>

                    </Grid>

                </Grid>

                <Divider sx={{ my: 3 }} />

                <Grid container spacing={2}>

                    <Grid item xs={12} md={4}>

                        <Typography
                            color="text.secondary"
                        >

                            Income Trend

                        </Typography>

                        <Typography
                            color={
                                comparison.incomeTrend === "Increased"

                                    ? "success.main"

                                    : "error.main"
                            }

                        >

                            {comparison.incomeTrend}

                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={4}>

                        <Typography
                            color="text.secondary"
                        >

                            Expense Trend

                        </Typography>

                        <Typography
                            color={
                                comparison.expenseTrend === "Increased"

                                    ? "error.main"

                                    : "success.main"
                            }

                        >

                            {comparison.expenseTrend}

                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={4}>

                        <Typography
                            color="text.secondary"
                        >

                            Savings Difference

                        </Typography>

                        <Typography>

                            ₹{comparison.savingDifference}

                        </Typography>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );

}
