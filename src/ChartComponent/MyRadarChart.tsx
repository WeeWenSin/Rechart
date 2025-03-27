import { data } from "./MyChart";
import { RadarChart,Radar,PolarGrid, PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer } from "recharts";

const MyRadarChart: React.FC = () =>{
    return(
        <ResponsiveContainer width="100%" height={200}>
                    <RadarChart data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis />
                        <Radar name="value" dataKey="value" stroke="violet" fill="pink" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
    );
};

export default MyRadarChart;