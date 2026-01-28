import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeUsers() {

  const navigate = useNavigate();

  const [coletas, setColetas] = useState([]);
  const [pontos, setPontos] = useState([]);
  const [cartaz, setCartaz] = useState(null);

  useEffect(() => {
    // exemplo de coletas do usuário
    setColetas([
      { id: 1, residuo: 'Garrafa PET', ponto: 'EcoPonto Centro', data: '12/06/2025', status: 'Aguardando' },
      { id: 2, residuo: 'Pilha', ponto: 'Recicla Sul', data: '13/06/2025', status: 'Em coleta' },
      { id: 3, residuo: 'Papelão', ponto: 'EcoPonto Centro', data: '10/06/2025', status: 'Coletado' }
    ]);

    // exemplo de pontos de coleta
    setPontos([
      { id: 1, nome: 'EcoPonto Centro', distancia: '1.2 km', aceita: 'Plástico, Papel' },
      { id: 2, nome: 'Recicla Sul', distancia: '2.5 km', aceita: 'Metal, Vidro' }
    ]);

    // exemplo de cartaz educativo
    setCartaz({
      titulo: 'Você sabia?',
      mensagem: 'Separar corretamente o lixo pode reduzir até 60% do impacto ambiental.'
    });
  }, []);

  return (
    <div className="container-fluid p-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>👤 Maria Silva — Reciclador</h4>
        <button className="btn btn-outline-danger">Sair</button>
      </div>

      {/* Cartaz educativo */}
      {cartaz && (
        <div className="alert alert-success">
          <strong>{cartaz.titulo}</strong> — {cartaz.mensagem}
        </div>
      )}

      <div className="row">

        {/* Minhas Coletas */}
        <div className="col-md-7">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5>🚛 Minhas Coletas</h5>
                <button className="btn btn-success btn-sm"
                  onClick={() => navigate('/coletas/cadastrar')}>
                  + Nova Coleta
                </button>
              </div>

              <table className="table mt-3">
                <thead>
                  <tr>
                    <th>Resíduo</th>
                    <th>Ponto</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {coletas.map(c => (
                    <tr key={c.id}>
                      <td>{c.residuo}</td>
                      <td>{c.ponto}</td>
                      <td>{c.data}</td>
                      <td>
                        <span className={
                          c.status === 'Coletado' ? 'badge bg-success' :
                          c.status === 'Em coleta' ? 'badge bg-warning' :
                          'badge bg-secondary'
                        }>
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>

        {/* Pontos de coleta */}
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h5>📍 Pontos de Coleta Próximos</h5>

              {pontos.map(p => (
                <div key={p.id} className="border rounded p-2 mb-2">
                  <strong>{p.nome}</strong><br/>
                  Aceita: {p.aceita}<br/>
                  Distância: {p.distancia}
                  <button className="btn btn-success btn-sm mt-2 w-100">
                    Solicitar Coleta
                  </button>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default HomeUsers;
