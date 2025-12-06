import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';

import { Link } from 'react-router-dom';


function Login(){
    return(
        <div className="login-container">
        <div className="text-center mb-4">
            <span className="brand">Recicla Mais</span>
        </div>

        <form>
            <div className="mb-3">
                <label className="form-label">E-mail</label>
                <input type="email" className="form-control" placeholder="Digite seu e-mail"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Senha</label>
                <input type="password" className="form-control" placeholder="Digite sua senha"/>
            </div>

            <div className="d-flex justify-content-between mb-3">
                <div>
                    <input type="checkbox" id="remember"/>
                    <label for="remember">Lembrar-me</label>
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