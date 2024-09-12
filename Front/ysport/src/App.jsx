import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ResultPage from "./ResultPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
