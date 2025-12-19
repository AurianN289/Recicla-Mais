import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/sidebar';

function AdminHome() {
  return (
    <div className="d-flex">
      
      <Sidebar />

      <div className="container-fluid p-4">
        <h2 className="mb-4">Painel Administrativo</h2>

        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card shadow text-center">
              <div className="card-body">
                <h6>Total de Usuários</h6>
                <h3>120</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center">
              <div className="card-body">
                <h6>Pontos de Coleta</h6>
                <h3>45</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center">
              <div className="card-body">
                <h6>Solicitações Pendentes</h6>
                <h3>18</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center">
              <div className="card-body">
                <h6>Coletas Realizadas</h6>
                <h3>72</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-body">
            <h5>Últimas Solicitações de Coleta</h5>
            <p className="text-muted">Aqui você pode listar as solicitações mais recentes.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminHome;
