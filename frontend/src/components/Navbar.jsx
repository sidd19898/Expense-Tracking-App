import {

    AppBar,

    Toolbar,

    Typography,

    IconButton

} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({

    onMenuClick

}) {

    return (

        <AppBar

            position="static"

            color="inherit"

            elevation={1}

        >

            <Toolbar>

                <IconButton

                    edge="start"

                    sx={{

                        display: {

                            xs: "block",

                            md: "none"

                        },

                        mr:2

                    }}

                    onClick={onMenuClick}

                >

                    <MenuIcon/>

                </IconButton>

                <Typography

                    variant="h6"

                    fontWeight={700}

                >

                    Expense Tracker

                </Typography>

            </Toolbar>

        </AppBar>

    );

}