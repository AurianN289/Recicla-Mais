import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';

import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';


function Login(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            email: email,
            senha: senha
        };

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (!response.ok) {
                alert("E-mail ou senha inválidos");
                return;
            }

            const usuario = await response.json();

            localStorage.setItem("usuario", JSON.stringify(usuario));

            if (usuario.tipoUsuario === 'ADMIN') {
                navigate('/admin');
            }

        } catch (error) {
            console.error(error);
            alert("Erro ao conectar com o servidor");
        }
    };

    return(
        <div className="login-container">
            <div className="text-center mb-4">
                <span className="brand">Recicla Mais</span>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail"
                        className="form-control" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>

                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Lembrar-me</label>
                    </div>
                    <a href="#" className="text-success">Esqueci a senha</a>
                </div>

                <button type="submit" className="btn btn-success w-100">
                    Entrar
                </button>

                <div className="text-center mt-3">
                    Não tem conta? <Link to="/register" className="nav-link">Criar Conta</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;