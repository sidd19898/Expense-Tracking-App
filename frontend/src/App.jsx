import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Categories from "./pages/Categories";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){

    return(

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login/>}
                />

                <Route
                    path="/signup"
                    element={<Signup/>}
                />

                <Route element={<ProtectedRoute/>}>

                    <Route element={<MainLayout/>}>

                        <Route
                            path="/dashboard"
                            element={<Dashboard/>}
                        />

                        <Route
                            path="/transactions"
                            element={<Transactions/>}
                        />

                        <Route
                            path="/categories"
                            element={<Categories/>}
                        />

                        <Route
                            path="/reports"
                            element={<Reports/>}
                        />

                        <Route
                            path="/profile"
                            element={<Profile/>}
                        />

                    </Route>

                </Route>

            </Routes>

        </BrowserRouter>

    )

}

export default App;