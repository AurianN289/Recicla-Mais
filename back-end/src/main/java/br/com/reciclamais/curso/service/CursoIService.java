
package br.com.reciclamais.curso.service;

import br.com.reciclamais.curso.entity.Curso;


public interface CursoIService {
    
    public abstract void save(Curso curso) throws RuntimeException;
    
}
