package br.com.reciclamais.Usuario.controller;

import br.com.reciclamais.Usuario.entity.Usuario;
import br.com.reciclamais.Usuario.service.UsuarioIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UsuarioIService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {



        try {
            Usuario usuarioLogado =
                    usuarioService.login(usuario.getEmail(), usuario.getSenha());

            

            return ResponseEntity.ok(usuarioLogado);

        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(e.getMessage());
        }
    }
}
