import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Future: <Route path="/clubs/origin" element={<OriginClub />} /> */}
    </Routes>
  );
}

export default App;
