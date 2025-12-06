
package br.com.reciclamais.Usuario.controller;

import br.com.reciclamais.Usuario.entity.Usuario;
import br.com.reciclamais.Usuario.service.UsuarioIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;


@Controller
public class UsuarioController implements UsuarioIController {
    
    @Autowired
    private UsuarioIService usuarioIService;

    @Override
    public void save(Usuario usuario) throws RuntimeException{
        usuarioIService.save(usuario);
    }
    
    
}
