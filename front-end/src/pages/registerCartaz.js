import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

function RegisterCartaz() {

  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cartaz = {
      titulo,
      conteudo,
      categoria
    };

    try {
      const response = await fetch('http://localhost:8080/cartazes/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartaz)
      });

      if (response.ok) {
        alert('Cartaz informativo cadastrado com sucesso!');
        navigate('/admin');
      } else {
        alert('Erro ao cadastrar cartaz informativo');
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
        <h3 className="mb-4">Cadastrar Cartaz Informativo</h3>

        <div className="card shadow">
          <div className="card-body">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Título</label>
                <input
                  type="text"
                  className="form-control"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
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
                  <option value="Reciclagem">Reciclagem</option>
                  <option value="Separação de Resíduos">Separação de Resíduos</option>
                  <option value="Meio Ambiente">Meio Ambiente</option>
                  <option value="Sustentabilidade">Sustentabilidade</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Conteúdo</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={conteudo}
                  onChange={(e) => setConteudo(e.target.value)}
                  required
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

export default RegisterCartaz;
