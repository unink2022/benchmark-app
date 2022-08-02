import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Simple Components
import Header from './components/Header.component';
import Navbar from './components/Navbar.component';

// Pages components
import Overview from './pages/Overview';
import Traffic from './pages/Traffic';
import SitePerformance from './pages/SitePerformance';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/site-performance" element={<SitePerformance />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
