import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPanel from './views/UserPanel';
import './App.css';
import AdminPanel from './views/AdminPanel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
