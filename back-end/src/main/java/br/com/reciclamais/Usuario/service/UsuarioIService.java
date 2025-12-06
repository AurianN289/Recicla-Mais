
package br.com.reciclamais.Usuario.service;


import br.com.reciclamais.Usuario.entity.Usuario;

public interface UsuarioIService {
    
    public abstract void save(Usuario usuario) throws RuntimeException;
    
}
