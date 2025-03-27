import { data2 } from "./MyChart";
import { Scatter,ScatterChart,XAxis,YAxis,ResponsiveContainer,CartesianGrid,Tooltip } from "recharts";

const MyScatterPlot:React.FC =() =>{
    return(
        <>
        <ResponsiveContainer width="100%" height={200}>
            <ScatterChart data={data2}>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="Height (cm)" />
                <YAxis type="number" dataKey="y" name="Weight (kg)" />
                <Tooltip cursor={{strokeDasharray: "3 3"}}/>
                <Scatter  stroke="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
        </>
    );
};

export default MyScatterPlot;