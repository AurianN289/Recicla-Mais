package br.com.reciclamais.Coleta.service;

import br.com.reciclamais.Coleta.entity.Coleta;
import br.com.reciclamais.Coleta.repository.ColetaRepository;
import br.com.reciclamais.Usuario.entity.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ColetaService implements ColetaIService {

    private final ColetaRepository coletaRepository;


    @Override
    public void save(Coleta coleta) throws RuntimeException {
        coleta.setStatus("Solicitado");

        if (coleta == null) {
            throw new RuntimeException("dados vazios");
        } else if (coleta.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            coletaRepository.save(coleta);
        }
    }

    @Override
    public List<Coleta> findAll() throws RuntimeException {
        return coletaRepository.findAll();
    }

}
