import {
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from "@mui/material";

export default function MonthSelector({

    month,

    year,

    setMonth,

    setYear,

    onGenerate

}) {

    const months = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];

    const currentYear = new Date().getFullYear();

    return (

        <Grid

            container

            spacing={2}

            alignItems="center"

            sx={{ mb: 4 }}

        >

            <Grid item xs={12} md={4}>

                <FormControl fullWidth>

                    <InputLabel>

                        Month

                    </InputLabel>

                    <Select

                        value={month}

                        label="Month"

                        onChange={(e) =>

                            setMonth(

                                e.target.value

                            )

                        }

                    >

                        {

                            months.map((monthName, index) => (

                                <MenuItem

                                    key={index}

                                    value={index + 1}

                                >

                                    {monthName}

                                </MenuItem>

                            ))

                        }

                    </Select>

                </FormControl>

            </Grid>

            <Grid item xs={12} md={4}>

                <FormControl fullWidth>

                    <InputLabel>

                        Year

                    </InputLabel>

                    <Select

                        value={year}

                        label="Year"

                        onChange={(e) =>

                            setYear(

                                e.target.value

                            )

                        }

                    >

                        {

                            Array.from(

                                {

                                    length: 5

                                },

                                (_, index) =>

                                    currentYear - index

                            ).map(yearValue => (

                                <MenuItem

                                    key={yearValue}

                                    value={yearValue}

                                >

                                    {yearValue}

                                </MenuItem>

                            ))

                        }

                    </Select>

                </FormControl>

            </Grid>

            <Grid item xs={12} md={4}>

                <Button

                    fullWidth

                    variant="contained"

                    onClick={onGenerate}

                    sx={{ height: "56px" }}

                >

                    Generate Report

                </Button>

            </Grid>

        </Grid>

    );

}