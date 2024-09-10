
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
