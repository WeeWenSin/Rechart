import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer, ComposedChart, TreemapProps } from "recharts";
import {data} from "./MyChart";

const MyLineCharts: React.FC = () =>{
    return (
        <>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray={"3 3"} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
        </>
    );
};

export default MyLineCharts;