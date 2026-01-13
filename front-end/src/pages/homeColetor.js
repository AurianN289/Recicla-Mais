import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function HomeColetor() {

  const [pendentes, setPendentes] = useState([]);
  const [minhasColetas, setMinhasColetas] = useState([]);

  useEffect(() => {
    // exemplo de solicitações pendentes
    setPendentes([
      { id: 1, usuario: 'Maria Silva', residuo: 'Garrafa PET', endereco: 'Rua A, 123', data: '14/06/2025' },
      { id: 2, usuario: 'João Souza', residuo: 'Pilha', endereco: 'Av. Central, 456', data: '14/06/2025' }
    ]);

    // exemplo de coletas já aceitas pelo coletor
    setMinhasColetas([
      { id: 3, usuario: 'Ana Lima', residuo: 'Papelão', endereco: 'Rua B, 222', status: 'A caminho' },
      { id: 4, usuario: 'Carlos Mendes', residuo: 'Vidro', endereco: 'Rua C, 99', status: 'Coletando' }
    ]);
  }, []);

  return (
    <div className="container-fluid p-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>🚛 João Coletor — Coletor</h4>
        <button className="btn btn-outline-danger">Sair</button>
      </div>

      {/* Cards resumo */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <h6>Solicitações Pendentes</h6>
              <h3>{pendentes.length}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <h6>Minhas Coletas</h6>
              <h3>{minhasColetas.length}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <h6>Finalizadas Hoje</h6>
              <h3>2</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row">

        {/* Solicitações pendentes */}
        <div className="col-md-6">
          <div className="card shadow mb-4">
            <div className="card-body">
              <h5>📥 Solicitações Pendentes</h5>

              {pendentes.map(s => (
                <div key={s.id} className="border rounded p-2 mb-2">
                  <strong>{s.usuario}</strong><br/>
                  Resíduo: {s.residuo}<br/>
                  Endereço: {s.endereco}<br/>
                  Data: {s.data}
                  <button className="btn btn-success btn-sm mt-2 w-100">
                    Aceitar Coleta
                  </button>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Minhas coletas */}
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5>🚛 Minhas Coletas</h5>

              {minhasColetas.map(c => (
                <div key={c.id} className="border rounded p-2 mb-2">
                  <strong>{c.usuario}</strong><br/>
                  Resíduo: {c.residuo}<br/>
                  Endereço: {c.endereco}<br/>
                  Status: 
                  <span className={
                    c.status === 'A caminho' ? 'badge bg-warning ms-2' :
                    c.status === 'Coletando' ? 'badge bg-primary ms-2' :
                    'badge bg-success ms-2'
                  }>
                    {c.status}
                  </span>

                  <div className="d-flex gap-2 mt-2">
                    <button className="btn btn-outline-primary btn-sm w-50">
                      Iniciar
                    </button>
                    <button className="btn btn-outline-success btn-sm w-50">
                      Finalizar
                    </button>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default HomeColetor;
