import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const COLORS = [

    "#3B82F6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6"

];

export default function ExpensePieChart({data}){

    if (!data || data.length === 0) {
    return <h3>No expense data available</h3>;
}

    return(

        <div
            style={{
                width:"100%",
                height:350
            }}
        >

            <ResponsiveContainer>

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="amount"

                        nameKey="category"

                        outerRadius={120}

                    >

                        {

                            data.map((entry,index)=>(

                                <Cell

                                    key={index}

                                    fill={
                                        COLORS[
                                            index%
                                            COLORS.length
                                        ]
                                    }

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    )

}