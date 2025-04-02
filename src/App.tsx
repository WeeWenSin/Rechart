import PostList from './ApiRTK/PostList';
import MyChart from './ChartComponent/MyChart';
import DataList from './ApiAxios/DataList';

function App() {//number要放{ },name记得一定要填他才能读取
  return (
    <div className="App">
      <h1>Chart Testing</h1>
      <MyChart />
      <h1>Example React + Axios API</h1>
      <DataList />
      <h1>RTK Query Example</h1>
      <PostList />
    </div>
  );
}

export default App;
