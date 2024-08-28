import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';

const App = () => (
  <Router>
    <Routes>
      <Route path="/portofolio_r" element={<Home />} />
      <Route path="/portofolio_r/project" element={<Project />} />
    </Routes>
  </Router>
);

export default App;