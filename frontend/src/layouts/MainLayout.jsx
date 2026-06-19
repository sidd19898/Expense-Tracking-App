import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {

    return (

        <div className="layout">

            <Sidebar />

            <div className="main-container">

                <Navbar />

                <main className="page-content">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}