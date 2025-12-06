
package br.com.reciclamais.curso.service;

import br.com.reciclamais.curso.repository.CursoRepository;
import br.com.reciclamais.curso.entity.Curso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CursoService implements CursoIService{
    
    @Autowired
    private CursoRepository cursoRepository;

    @Override
    public void save(Curso curso) throws RuntimeException{
        if(curso == null){
            throw new RuntimeException("dados vazios");
        }else if(curso.getId() != null){
            throw new RuntimeException("id ja existe");
        }else{
            cursoRepository.save(curso);
        }
    }
    
    
}
