import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import MonthSelector from "../components/MonthSelector";
import MonthlySummaryCards from "../components/MonthlySummaryCards";
import HighestExpenseCard from "../components/HighestExpenseCard";
import MonthlyComparisonCard from "../components/MonthlyComparisonCard";
import CategoryAnalysisChart from "../components/CategoryAnalysisChart";

import {
    getMonthlyReport,
    getMonthlyComparison,
    getCategoryAnalysis
} from "../api/reportApi";

import "./Reports.css";

export default function Reports() {

    const today = new Date();

    const [month, setMonth] = useState(
        today.getMonth() + 1
    );

    const [year, setYear] = useState(
        today.getFullYear()
    );

    const [monthlyReport, setMonthlyReport] = useState(null);

    const [comparison, setComparison] = useState(null);

    const [categoryAnalysis, setCategoryAnalysis] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        generateReport();

    }, []);

    async function generateReport() {

        try {

            setLoading(true);

            const monthly = await getMonthlyReport(
                month,
                year
            );

            const compare = await getMonthlyComparison(
                month,
                year
            );

            const category = await getCategoryAnalysis(
                month,
                year
            );

            setMonthlyReport(monthly);

            setComparison(compare);

            setCategoryAnalysis(category);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return <Loading />;

    }

    return (

        <div className="reports-page">

            <div className="reports-header">

                <h1>

                    Reports

                </h1>

                <p>

                    Monthly financial analysis

                </p>

            </div>

            <MonthSelector

                month={month}

                year={year}

                setMonth={setMonth}

                setYear={setYear}

                onGenerate={generateReport}

            />

            <MonthlySummaryCards

                report={monthlyReport}

            />

            <HighestExpenseCard

    expense={monthlyReport.highestExpense}

/>

<MonthlyComparisonCard

    comparison={comparison}

/>

<CategoryAnalysisChart

    data={categoryAnalysis}

/>

        </div>

    );

}