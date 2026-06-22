import {

    Drawer,

    Box

} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CategoryIcon from "@mui/icons-material/Category";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonIcon from "@mui/icons-material/Person";

import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar({

    mobileOpen,

    onClose

}) {

    const drawer = (

        <Box className="sidebar">

            <h2>

                Expense Tracker

            </h2>

            <NavLink to="/dashboard"  onClick={onClose}>

                <DashboardIcon/>

                <span>Dashboard</span>

            </NavLink>

            <NavLink to="/transactions"  onClick={onClose}>

                <ReceiptLongIcon/>

                <span>Transactions</span>

            </NavLink>

            <NavLink to="/categories"  onClick={onClose}>

                <CategoryIcon/>

                <span>Categories</span>

            </NavLink>

            <NavLink to="/reports"  onClick={onClose}>

                <AssessmentIcon/>

                <span>Reports</span>

            </NavLink>

            <NavLink to="/profile"  onClick={onClose}>

                <PersonIcon/>

                <span>Profile</span>

            </NavLink>

        </Box>

    );

    return (

        <>

            {/* Desktop */}

            <Box

                sx={{

                    display: {

                        xs:"none",

                        md:"block"

                    },

                    width:250,

                    flexShrink:0

                }}

            >

                {drawer}

            </Box>

            {/* Mobile */}

            <Drawer

                variant="temporary"

                open={mobileOpen}

                onClose={onClose}

                ModalProps={{

                    keepMounted:true

                }}

                sx={{

                    display:{

                        xs:"block",

                        md:"none"

                    },

                    "& .MuiDrawer-paper": {
    width: 220,
    backgroundColor: "#1E293B",
    color: "white"
}

                }}

            >

                {drawer}

            </Drawer>

        </>

    );

}