import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ResultPage from "./views/ResultPage";
import DetailPage from "./views/DetailPage";
import Button from "./components/Button/Button";
import ContactPage from "./views/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result/:id/:ids" element={<ResultPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/button" element={<Button text="toto" />} />
    </Routes>
  );
}

export default App;
