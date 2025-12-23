package br.com.reciclamais.PontosDeColeta.controller;

import br.com.reciclamais.PontosDeColeta.entity.PontoDeColeta;
import br.com.reciclamais.PontosDeColeta.service.PontosDeColetaIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/pontos-coleta")
@RequiredArgsConstructor
public class PontoColetaController {

    private final PontosDeColetaIService pontoColetaService;

    @GetMapping(path = "/findall", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> findAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(pontoColetaService.findAll());
    }

    @PostMapping(
            path = "/save",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> save(@RequestBody PontoColeta pontoColeta) {
        pontoColetaService.save(pontoColeta);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(pontoColeta);
    }
}
