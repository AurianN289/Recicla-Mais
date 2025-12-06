package br.com.reciclamais;

import br.com.reciclamais.Usuario.controller.UsuarioIController;
import br.com.reciclamais.Usuario.entity.Usuario;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {
    
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Application.class, args);

        Usuario user = new  Usuario();
        user.setNome("aurian");
        user.setSenha("123456");
        user.setEmail("aurian@ifba.com");

        UsuarioIController control =  context.getBean(UsuarioIController.class);
        control.save(user);
    }

}
