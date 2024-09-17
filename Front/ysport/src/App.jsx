import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ResultPage from "./views/ResultPage";
import DetailPage from "./views/DetailPage";
import MapWithMarker from "./components/MapWithMarker/MapWithMarker";
import ModalMap from "./components/ModalMap/ModalMap";
import ContactPage from "./views/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result/:id/:ids" element={<ResultPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* <!-- Componant test zone --> */ }
      <Route path="/ModalMap" element={<ModalMap id_place="IO_1337" place_name="Tour Eiffel 42" longitude={2.2945} latitude={48.8584} adress="421 rue de backend 33200 NOWHERE"  />} />
      
    </Routes>
  );
}

export default App;
