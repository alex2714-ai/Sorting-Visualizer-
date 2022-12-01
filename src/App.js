import SortingVisualizer from "./components/SortingVisualizer";
import "./App.css";
import Header from "./components/layout/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <SortingVisualizer />
    </div>
  );
}

export default App;
