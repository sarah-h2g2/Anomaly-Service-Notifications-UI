import Header from "./components/Header/Header";
import Metrics from "./components/Metrics/Metrics";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/metrics" element={<Metrics />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
