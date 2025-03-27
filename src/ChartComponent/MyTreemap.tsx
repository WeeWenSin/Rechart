import { Treemap,ResponsiveContainer } from "recharts";

const dataT = [
    { grp: "A", value: 500},
    { grp: "B", value: 600},
    { grp: "C", value: 400},
    { grp: "D", value: 350},
    { grp: "E", value: 200},
];

const MyTreemap: React.FC = () =>{
    return (
        <>
        <ResponsiveContainer width="100%" height={200}>
                <Treemap
                  data={dataT}
                  dataKey="value"
                  stroke="#fff"
                  fill="#8884d8"
                />
        </ResponsiveContainer>
        </>
    );
};

export default MyTreemap;