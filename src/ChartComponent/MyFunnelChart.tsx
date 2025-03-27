import { data } from "./MyChart";
import { FunnelChart,Funnel,Tooltip,ResponsiveContainer,LabelList } from "recharts";

const MyFunnelChart:React.FC = () =>{
    return(
    <ResponsiveContainer width="100%" height={200}>
        <FunnelChart>
            <Tooltip />
            <Funnel dataKey="value" data={data} isAnimationActive fill="red">
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
            </Funnel>
        </FunnelChart>
      </ResponsiveContainer> 
    );
};

export default MyFunnelChart;