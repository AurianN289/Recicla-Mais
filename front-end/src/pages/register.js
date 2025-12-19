import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            alert("As senhas não conferem");
            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        try{
            const response = await fetch('http://localhost:8080/usuarios/save',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });
    
            if (response.ok) {
                alert("Usuário registrado com sucesso!");
            } else {
                alert("Erro ao registrar usuário");
            }

        } catch (error) {
            console.error(error);
            alert("Erro de conexão com o servidor");
        };



    }

    return(
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4">

                <h3 className="text-center mb-3">Criar Conta</h3>
                <p className="text-center text-muted">Registre-se para acessar o Recicla Mais</p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome Completo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmarSenha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                        Registrar
                    </button>

                </form>

                <div className="text-center mt-3">
                    <span className="text-muted">Já tem uma conta?</span>
                    <Link to="/" className="nav-link">Entrar</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
