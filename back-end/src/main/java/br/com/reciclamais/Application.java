package br.com.reciclamais;

import br.com.reciclamais.Usuario.controller.UsuarioController;
import br.com.reciclamais.Usuario.entity.Usuario;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {
    
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Application.class, args);

        

    }

}
