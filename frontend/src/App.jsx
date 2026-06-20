import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Categories from "./pages/Categories";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Redirect root to login */}

                <Route

                    path="/"

                    element={<Navigate to="/login" replace />}

                />

                {/* Public Routes */}

                <Route

                    path="/login"

                    element={<Login />}

                />

                <Route

                    path="/signup"

                    element={<Signup />}

                />

                {/* Protected Routes */}

                <Route element={<ProtectedRoute />}>

                    <Route element={<MainLayout />}>

                        <Route

                            path="/dashboard"

                            element={<Dashboard />}

                        />

                        <Route

                            path="/transactions"

                            element={<Transactions />}

                        />

                        <Route

                            path="/categories"

                            element={<Categories />}

                        />

                        <Route

                            path="/reports"

                            element={<Reports />}

                        />

                        <Route

                            path="/profile"

                            element={<Profile />}

                        />

                    </Route>

                </Route>

                {/* Unknown Routes */}

                <Route

                    path="*"

                    element={<Navigate to="/login" replace />}

                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;