package br.com.reciclamais;

import br.com.reciclamais.curso.controller.CursoIController;
import br.com.reciclamais.curso.entity.Curso;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {
    
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Application.class, args);
            
        Curso curso = new Curso();
        curso.setNome("cscsc");
        curso.setCodCurso("c");
        curso.setAtivo(true);

        CursoIController cursoController = context.getBean(CursoIController.class);
        cursoController.save(curso);
    }

}
