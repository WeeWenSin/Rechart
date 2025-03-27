import { Line,Bar,ComposedChart,ResponsiveContainer,CartesianGrid,XAxis,YAxis,Tooltip,Legend } from "recharts";
import { data } from "./MyChart";

const MyComposedChart:React.FC = () =>{
    return (
    <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={data}>
                <CartesianGrid strokeDasharray={"3 3"} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="anotherValue" barSize={30} fill="yellow" />
                <Line type="monotone" dataKey="value" stroke="green" />
            </ComposedChart>
    </ResponsiveContainer>
    )
};

export default MyComposedChart;