import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

function RegisterResiduo() {

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const residuo = {
      nome,
      categoria,
      descricao
    };

    try {
      const response = await fetch('http://localhost:8080/residuos/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(residuo)
      });

      if (response.ok) {
        alert('Resíduo cadastrado com sucesso!');
        navigate('/admin');
      } else {
        alert('Erro ao cadastrar resíduo');
      }

    } catch (error) {
      console.error(error);
      alert('Erro de conexão com o servidor');
    }
  };

  return (
    <div className="d-flex">

      <Sidebar />

      <div className="container p-4">
        <h3 className="mb-4">Cadastrar Resíduo</h3>

        <div className="card shadow">
          <div className="card-body">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Nome do Resíduo</label>
                <input
                  type="text"
                  className="form-control"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Categoria</label>
                <select
                  className="form-select"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Plástico">Plástico</option>
                  <option value="Papel">Papel</option>
                  <option value="Vidro">Vidro</option>
                  <option value="Metal">Metal</option>
                  <option value="Orgânico">Orgânico</option>
                  <option value="Eletrônico">Eletrônico</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success">
                  Salvar
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate('/admin')}
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

export default RegisterResiduo;
