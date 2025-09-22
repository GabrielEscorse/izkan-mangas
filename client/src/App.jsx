import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MangaList from './pages/MangaList';
import MangaDetail from './pages/MangaDetail';
import ChapterReader from './pages/ChapterReader';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/manga" element={<MangaList />} />
        <Route path="/manga/:id" element={<MangaDetail />} />
        <Route path="/manga/:id/chapter/:chapterId" element={<ChapterReader />} />
      </Routes>
    </Router>
  );
}

export default App;
