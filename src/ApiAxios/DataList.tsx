import { fetchData } from "./api";
import React,{useState, useEffect} from "react";

const DataList: React.FC = () => {
const [data, setData] = useState<any[]>([]);

useEffect(() =>{
    fetchData(setData);
}, []);
//会print出json格式
//{data?(<pre>{JSON.stringify(data,null,2)}</pre>):(<p>loading...</p>)}
return (
    <div>
        {data.length > 0 ? (
        <table border={1} cellPadding="30" cellSpacing="0">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th> // ✅ 生成表头
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, idx) => (
                  <td key={idx}>{String(value)}</td> // ✅ 生成表格内容
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
);
};

export default DataList;