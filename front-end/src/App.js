import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import AdminHome from './pages/homeAdmin';
import RegisterResiduo from './pages/registerResiduo';
import RegisterLocais from './pages/registerLocais';
import RegisterCartaz from './pages/registerCartaz';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/residuos/cadastrar" element={<RegisterResiduo />} />
        <Route path="/pontos-coleta/cadastrar" element={<RegisterLocais />} />
        <Route path="/cartazes/cadastrar" element={<RegisterCartaz />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
