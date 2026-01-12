package br.com.reciclamais.PontoDeColeta.controller;

import br.com.reciclamais.PontoDeColeta.entity.PontoDeColeta;
import br.com.reciclamais.PontoDeColeta.service.PontoDeColetaIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/pontodecoleta")
@RequiredArgsConstructor
public class PontoDeColetaController {

    private final PontoDeColetaIService pontoDeColetaService;

    @PostMapping(
            path = "/save",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> save(@RequestBody PontoDeColeta pontoDeColeta) {
        pontoDeColetaService.save(pontoDeColeta);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(pontoDeColeta);
    }
}
