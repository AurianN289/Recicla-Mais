package br.com.reciclamais.Residuos.controller;

import br.com.reciclamais.Residuos.entity.Residuo;
import br.com.reciclamais.Residuos.service.ResiduoIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/residuos")
@RequiredArgsConstructor
public class ResiduoController {

    private final ResiduoIService residuoService;

    @GetMapping(path = "/findall", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> findAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(residuoService.findAll());
    }

    @PostMapping(
            path = "/save",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> save(@RequestBody Residuo residuo) {
        residuoService.save(residuo);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(residuo);
    }
}
