package br.com.reciclamais.Coleta.controller;

import br.com.reciclamais.Coleta.entity.Coleta;
import br.com.reciclamais.Coleta.service.ColetaIService;
import br.com.reciclamais.Residuos.entity.Residuo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="/coletas")
@RequiredArgsConstructor
public class ColetaController {

    private final ColetaIService coletaService;

    @GetMapping(path = "/findall", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> findAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(coletaService.findAll());
    }

    @PostMapping(
            path = "/save",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> save(@RequestBody Coleta coleta) {
        coletaService.save(coleta);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(coleta);
    }

}
