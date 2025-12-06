
package br.com.reciclamais.Usuario.service;


import br.com.reciclamais.Usuario.entity.Usuario;

import java.util.List;

public interface UsuarioIService {
    
    public abstract void save(Usuario usuario) throws RuntimeException;


    public abstract List<Usuario> findAll() throws RuntimeException;
}
