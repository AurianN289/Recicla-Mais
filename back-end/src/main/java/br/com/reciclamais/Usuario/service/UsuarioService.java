
package br.com.reciclamais.Usuario.service;

import br.com.reciclamais.Usuario.entity.Usuario;
import br.com.reciclamais.Usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UsuarioService implements UsuarioIService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public void save(Usuario usuario) throws RuntimeException{
        if(usuario == null){
            throw new RuntimeException("dados vazios");
        }else if(usuario.getId() != null){
            throw new RuntimeException("id ja existe");
        }else{
            usuarioRepository.save(usuario);
        }
    }

    @Override
    public List<Usuario> findAll() throws RuntimeException{
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario findById(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    @Override
    public Usuario login(String email, String senha) {

        if (email == null || senha == null) {
            throw new RuntimeException("Email ou senha vazios");
        }

        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));



        if (!usuario.getSenha().equals(senha)) {
            throw new RuntimeException("Senha inválida");
        }

        // não devolver senha
        usuario.setSenha(null);
        return usuario;
    }


}
