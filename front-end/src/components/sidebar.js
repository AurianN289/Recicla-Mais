import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-success text-white p-3" style={{ width: '220px', height: '100vh' }}>
      <h4>Recicla Mais</h4>
      <hr />
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/usuarios" className="nav-link text-white">Usuários</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/pontos" className="nav-link text-white">Pontos de Coleta</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/solicitacoes" className="nav-link text-white">Solicitações</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/educacao" className="nav-link text-white">Educação Ambiental</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
