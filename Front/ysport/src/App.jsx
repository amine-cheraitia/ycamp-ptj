import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ResultPage from "./views/ResultPage";
import DetailPage from "./views/DetailPage";
import SportTypeList from "./components/MakeSportTypeList/MakeSportTypeList";
import ContactPage from "./views/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* <!-- Componant test zone --> */ }
      <Route path="/test"  element={<SportTypeList />} />

    </Routes>
  );
}

export default App;
