import { NavLink } from "react-router-dom";

export default function Sidebar(){

    return(

        <aside className="sidebar">

            <h2>Expense Tracker</h2>

            <NavLink to="/dashboard">
                Dashboard
            </NavLink>

            <NavLink to="/transactions">
                Transactions
            </NavLink>

            <NavLink to="/categories">
                Categories
            </NavLink>

            <NavLink to="/reports">
                Reports
            </NavLink>

            <NavLink to="/profile">
                Profile
            </NavLink>

        </aside>

    )

}