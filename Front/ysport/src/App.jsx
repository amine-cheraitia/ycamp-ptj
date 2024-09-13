import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ResultPage from "./views/ResultPage";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/button" element={<Button text="toto" />} />
      </Routes>
    </div>
  );
}

export default App;
