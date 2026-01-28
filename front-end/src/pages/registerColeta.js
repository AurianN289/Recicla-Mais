import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterColeta() {

  const navigate = useNavigate();

  const [tipoResiduo, setTipoResiduo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [dataColeta, setDataColeta] = useState('');

  // Exemplo: usuário vindo do localStorage
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const solicitacao = {
      tipoResiduo,
      endereco,
      dataColeta
    };

    try {
      const response = await fetch('http://localhost:8080/coletas/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(solicitacao)
      });

      if (response.ok) {
        alert('Solicitação de coleta registrada com sucesso!');
        navigate('/home-users');
      } else {
        alert('Erro ao registrar solicitação');
      }

    } catch (error) {
      console.error(error);
      alert('Erro de conexão com o servidor');
    }
  };

  return (
    <div className="d-flex">

      <div className="container p-4">
        <h3 className="mb-4">Registrar Solicitação de Coleta</h3>

        <div className="card shadow">
          <div className="card-body">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Tipo de Resíduo</label>
                <select
                  className="form-select"
                  value={tipoResiduo}
                  onChange={(e) => setTipoResiduo(e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Plástico">Plástico</option>
                  <option value="Papel">Papel</option>
                  <option value="Metal">Metal</option>
                  <option value="Vidro">Vidro</option>
                  <option value="Eletrônico">Eletrônico</option>
                  <option value="Orgânico">Orgânico</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Endereço para Coleta</label>
                <input
                  type="text"
                  className="form-control"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Data da Coleta</label>
                <input
                  type="date"
                  className="form-control"
                  value={dataColeta}
                  onChange={(e) => setDataColeta(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success">
                  Solicitar Coleta
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate('/home-users')}
                >
                  Cancelar
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default RegisterColeta;
