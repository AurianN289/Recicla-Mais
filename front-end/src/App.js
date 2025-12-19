import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import AdminHome from './pages/homeAdmin';
import RegisterResiduo from './pages/registerResiduo';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/residuos/cadastrar" element={<RegisterResiduo />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
