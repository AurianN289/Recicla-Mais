
package br.com.reciclamais.curso.controller;

import br.com.reciclamais.curso.service.CursoIService;
import br.com.reciclamais.curso.entity.Curso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class CursoController implements CursoIController{
    
    @Autowired
    private CursoIService cursoIService;

    @Override
    public void save(Curso curso) throws RuntimeException{
        cursoIService.save(curso);
    }
    
    
}
