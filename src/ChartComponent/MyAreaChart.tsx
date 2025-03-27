import { data } from "./MyChart";
import { AreaChart,Area,ResponsiveContainer,XAxis,YAxis,Tooltip,Legend,CartesianGrid } from "recharts";

const MyAreaChart:React.FC = () =>{
    return (
        <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray={"3 3"} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="value" stroke="green" fill="green" fillOpacity={0.6} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default MyAreaChart;