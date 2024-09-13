import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ResultPage from "./views/ResultPage";

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
