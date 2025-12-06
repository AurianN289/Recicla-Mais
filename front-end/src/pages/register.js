import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/register.css';
import { Link } from 'react-router-dom';

function Register(){
    return(
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card shadow p-4">

                <h3 class="text-center mb-3">Criar Conta</h3>
                <p class="text-center text-muted">Registre-se para acessar o Recicla Mais</p>

                <form>

                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome Completo</label>
                        <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" required/>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" required/>
                    </div>

                    <div class="mb-3">
                        <label for="senha" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="senha" placeholder="Digite sua senha" required/>
                    </div>

                    <div class="mb-3">
                        <label for="confirmarSenha" class="form-label">Confirmar Senha</label>
                        <input type="password" class="form-control" id="confirmarSenha" placeholder="Confirme sua senha" required/>
                    </div>

                    <button type="submit" class="btn btn-success w-100">
                        Registrar
                    </button>

                </form>

                <div class="text-center mt-3">
                    <span class="text-muted">Já tem uma conta?</span>
                    <Link to="/" className="nav-link">Entrar</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
