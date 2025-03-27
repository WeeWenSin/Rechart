import { data } from "./MyChart";
import { BarChart,Bar, ResponsiveContainer,XAxis,YAxis,Tooltip,Legend} from "recharts";

const MyBarChart:React.FC = () =>{
    return(
        <>
        <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="blue" />
                    </BarChart>
                </ResponsiveContainer>
        </>
    )
}

export default MyBarChart;