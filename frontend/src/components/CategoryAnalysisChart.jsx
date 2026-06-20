import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

import {

    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip

} from "recharts";

export default function CategoryAnalysisChart({ data }) {

    if (!data || data.length === 0) {

        return (

            <Card>

                <CardContent>

                    <Typography variant="h6">

                        Category Analysis

                    </Typography>

                    <Typography color="text.secondary">

                        No expense data available.

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

                    Category Analysis

                </Typography>

                <ResponsiveContainer
                    width="100%"
                    height={350}
                >

                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{
                            top: 20,
                            right: 20,
                            left: 20,
                            bottom: 20
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            type="number"
                        />

                        <YAxis
                            dataKey="category"
                            type="category"
                        />

                        <Tooltip />

                        <Bar
                            dataKey="amount"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}