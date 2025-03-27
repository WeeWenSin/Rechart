import MyLineCharts from "./MyLineCharts";
import MyBarChart from "./MyBarChart";
import MyPieChart from "./MyPieChart";
import MyComposedChart from "./MyComposedChart";
import MyScatterPlot from "./MyScatterPlot";
import MyRadarChart from "./MyRadarChart";
import MyAreaChart from "./MyAreaChart";
import MyTreemap from "./MyTreemap";
import MyRadialBarChart from "./MyRadialBarChart";
import MyFunnelChart from "./MyFunnelChart";

//1.要data
export const data = [
    {name:"Jan", value: 500,anotherValue: 500},
    {name:"Feb", value: 300,anotherValue: 600},
    {name:"Mar", value: 200,anotherValue: 400},
    {name:"Apr", value: 278,anotherValue: 350},
    {name:"May", value: 189,anotherValue: 200},
];

export const data2 = [
    { x: 160, y: 50 },
    { x: 170, y: 65 },
    { x: 180, y: 80 },
    { x: 150, y: 45 },
    { x: 165, y: 60 },
];

//2.建function
//这是LineChart
const MyChart: React.FC = () =>{
    return(
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr",gap: "5px"}}>
        <div>
            <h2>Line</h2>
            <MyLineCharts />
        </div>

        <div>
            <h2>Bar</h2>
            <MyBarChart />
        </div>

        <div>
            <h2>Pie</h2>
            <MyPieChart />
        </div>

        <div>
            <h2>Bar + Line</h2>
            <MyComposedChart />
        </div>
    
        <div>
            <h2>Scatter Plot</h2>
            <MyScatterPlot />
        </div>

        <div>
            <h2>Radar Chart</h2>
            <MyRadarChart />
        </div>

        <div>
            <h2>Area</h2>
            <MyAreaChart />
        </div>

        <div>
            <h2>Treemap</h2>
            <MyTreemap />
        </div>

        <div>
        <h2>RadialBar</h2>
            <MyRadialBarChart />
        </div>

    <div>
    <h2>Funnel</h2>
    <MyFunnelChart />
    </div>
    </div>
    );
};

export default MyChart;