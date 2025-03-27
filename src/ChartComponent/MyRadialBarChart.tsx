import { data } from "./MyChart";
import { RadialBarChart,RadialBar,Legend,ResponsiveContainer } from "recharts";

const MyRadialBarChart = () =>{
    return(
        <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart innerRadius="30%" outerRadius="100%" data={data} startAngle={90} endAngle={-180} >
            <RadialBar label={{position:"insideStart",fontSize:10}} dataKey="value" fill="cyan" fillOpacity={0.5} />
            <Legend />
        </RadialBarChart>
        </ResponsiveContainer> 
    );
};

export default MyRadialBarChart;