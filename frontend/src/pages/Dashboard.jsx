import { useEffect, useState } from "react";

import SummaryCard from "../components/SummaryCard";
import TransactionCard from "../components/TransactionCard";
import { getDashboard } from "../api/reportApi";
import ExpensePieChart from "../components/ExpensePieChart";
import { getCategoryAnalysis } from "../api/reportApi";
import "./Dashboard.css";
import Loading from "../components/Loading";

export default function Dashboard(){

    const [chartData, setChartData] = useState([]);

    const [dashboard,setDashboard] = useState(null);

    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        fetchDashboard();

    },[]);

    async function fetchDashboard(){

    try{

        const dashboardData = await getDashboard();

        setDashboard(dashboardData);

        const today = new Date();

        const month = today.getMonth() + 1;

        const year = today.getFullYear();

        const categoryData = await getCategoryAnalysis(
            month,
            year
        );

        setChartData(categoryData);

    }

    catch(err){

        console.log(err);

    }

    finally{

        setLoading(false);

    }

}

    if(loading){

        return <Loading></Loading>

    }

    return(

        <div className="dashboard">

            <div className="cards">

                <SummaryCard

                    title="Balance"

                    value={`₹${dashboard.balance}`}

                />

                <SummaryCard

                    title="Income"

                    value={`₹${dashboard.totalIncome}`}

                />

                <SummaryCard

                    title="Expense"

                    value={`₹${dashboard.totalExpense}`}

                />

                <SummaryCard

                    title="Transactions"

                    value={dashboard.transactions}

                />

            </div>
 
          <div className="charts">

    <ExpensePieChart

        data={chartData}

    />

</div>

            <div className="recent">

    <h2>

        Recent Transactions

    </h2>

    {

        dashboard.recentTransactions.map(transaction=>(

            <TransactionCard

                key={transaction._id}

                transaction={transaction}

            />

        ))

    }

</div>

        </div>

    )

}