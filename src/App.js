import "./App.css";
import AutoCounter from "./components/AutoCounter";
import ManualCounter from "./components/ManualCounter";
import RandomName from "./components/RandomName";
import alertPopUp from "./components/ManualCounter";
import popUp from "./components/ManualCounter";

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
