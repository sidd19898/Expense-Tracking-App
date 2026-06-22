import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {

        setMobileOpen(!mobileOpen);

    };

    return (

        <div className="layout">

            <Sidebar

                mobileOpen={mobileOpen}

                onClose={handleDrawerToggle}

            />

            <div className="main-container">

                <Navbar

                    onMenuClick={handleDrawerToggle}

                />

                <main className="page-content">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}