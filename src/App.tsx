import Greeting from './Greeting';
import Counter from './Counter';
import MyChart from './ChartComponent/MyChart';

function App() {//number要放{ },name记得一定要填他才能读取
  return (
    <div className="App">
      <Greeting name="Aba" />
      <Greeting name="Bob" age={123} />
      <Counter />
      <h1>Sales Data</h1>
      <MyChart />
    </div>
  );
}

export default App;
