import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CategoryIcon from "@mui/icons-material/Category";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonIcon from "@mui/icons-material/Person";
import "./Sidebar.css"
import { NavLink } from "react-router-dom";

export default function Sidebar() {

    return (

        <aside className="sidebar">

            <h2>Expense Tracker</h2>

            <NavLink to="/dashboard">
                <DashboardIcon />
                <span>Dashboard</span>
            </NavLink>

            <NavLink to="/transactions">
                <ReceiptLongIcon />
                <span>Transactions</span>
            </NavLink>

            <NavLink to="/categories">
                <CategoryIcon />
                <span>Categories</span>
            </NavLink>

            <NavLink to="/reports">
                <AssessmentIcon />
                <span>Reports</span>
            </NavLink>

            <NavLink to="/profile">
                <PersonIcon />
                <span>Profile</span>
            </NavLink>

        </aside>

    );

}