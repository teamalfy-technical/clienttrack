import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboardlight from './Dashboarb-light'
import DashboardDark from './Dashboard-dark';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Dashboardlight />} />
        <Route path="/dark" element={<DashboardDark />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
