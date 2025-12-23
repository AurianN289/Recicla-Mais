package br.com.reciclamais.Cartaz.controller;

import br.com.reciclamais.Cartaz.entity.Cartaz;
import br.com.reciclamais.Cartaz.service.CartazIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/cartazes")
@RequiredArgsConstructor
public class CartazController {

    private final CartazIService cartazService;

    @GetMapping(
            path = "/findall",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> findAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(cartazService.findAll());
    }

    @PostMapping(
            path = "/save",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> save(@RequestBody Cartaz cartaz) {
        cartazService.save(cartaz);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(cartaz);
    }
}
