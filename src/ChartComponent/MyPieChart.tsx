import React from "react";
import { data } from "./MyChart";
import { PieChart,Pie,ResponsiveContainer,Tooltip,Legend,Bar,Cell} from "recharts";
import { text } from "stream/consumers";

const COLORS = ["red","green","blue","yellow","pink"];

const MyPieChart:React.FC = () =>{
    return(
        <ResponsiveContainer width="100%" height={200}>
            <PieChart data={data}>
                <Pie 
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                    dataKey="value"
                    label>
                        {data.map((_, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
        );
};

export default MyPieChart;