
package br.com.reciclamais.Usuario.controller;


import br.com.reciclamais.Usuario.entity.Usuario;

public interface UsuarioIController {
    public abstract void save(Usuario usuario) throws RuntimeException;
    
    
}
