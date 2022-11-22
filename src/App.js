import "./App.css";
import AutoCounter from "./components/AutoCounter";
import ManualCounter from "./components/ManualCounter";
import RandomName from "./components/RandomName";

function App() {
  return (
    <div className="App">
      <AutoCounter />
      <ManualCounter />
      <RandomName />
    </div>
  );
}

export default App;
