import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPanel from './views/UserPanel';
import './App.css';
import Admin from './components/adminPanel/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPanel />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
