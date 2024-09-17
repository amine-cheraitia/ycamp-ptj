import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ResultPage from "./views/ResultPage";
import DetailPage from "./views/DetailPage";
import MapResult from "./components/MapResult/MapResult";
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
      <Route path="/MapResult" element={<MapResult id_place="Paris" place_name="Tour Eiffel" longitude={2.2945} latitude={48.8584} />} />
      <Route path="/MapWithMarker" element={<MapWithMarker id_place="IO_1337" place_name="Tour Eiffel 42" longitude={2.2945} latitude={48.8584} />} />
      <Route path="/ModalMap" element={<ModalMap />} />
    </Routes>
  );
}

export default App;
